<template> 
  <div :inert="showRestaurantModal">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-8">
          <div class="card shadow-sm border-0 rounded-lg">
            <div class="row g-0">
              <!-- Profile Details Section -->
              <div class="col-md-12">
                <div class="card-header text-center text-white py-4" style="background-color: #90CAF9;">
                  <h2 class="mb-0">Profile</h2>
                </div>
                <div class="card-body text-center">
                  <div class="profile-section d-flex flex-column align-items-center">
                    <!-- Display User Avatar -->
                    <img
                        :src="user?.photoURL || defaultAvatar"
                        alt="User Avatar"
                        class="rounded-circle mb-3 border border-light shadow-sm"
                        style="width: 120px; height: 120px; object-fit: cover;"
                    />

                    <!-- Display User Name -->
                    <h4 class="mb-2 text-dark font-weight-bold">{{ this.user?.name || 'Anonymous User' }}</h4>

                    <!-- Follow/Unfollow Button -->
                    <button 
                      :class="['btn', isFollowing ? 'btn-secondary' : 'btn-primary', 'corner-button']"
                      @click="toggleFollow">
                      {{ isFollowing ? 'Unfollow' : 'Follow' }}
                    </button>

                    <!-- Display User Score -->
                    <div class="user-score mb-4">
                      <h5 class="text-secondary">
                        Score:
                        <span class="badge badge-pill badge-light px-3 py-2">{{ userScore }} Points</span>
                      </h5>
                    </div>

                    <!-- Display Recently Viewed Restaurants -->
                    <h5 class="text-left w-100 mt-3 mb-2 text-muted">Recently Visited Restaurants</h5>
                    <ul v-if="recentRestaurants.length > 0" class="list-group w-100 shadow-sm">
                      <li 
                        v-for="restaurant in recentRestaurants" 
                        :key="restaurant.id" 
                        class="list-group-item d-flex justify-content-between align-items-center"
                      >
                        <!-- Display Restaurant Name -->
                        <span class="text-dark">{{ restaurant.name || 'Loading name...' }}</span>

                        <!-- Display Visit Count -->
                        <span class="badge badge-primary badge-pill">{{ restaurant.visitCount }} visits</span>
                        <div>
                          <button @click="openRestaurantModal(restaurant.id)">View Details</button>
                        </div>
                      </li>
                    </ul>

                      <!-- If no recently viewed restaurants, show this message -->
                      <div v-else class="text-center mt-4">
                        <p class="text-muted">No recently viewed restaurants yet.</p>
                      </div>

                  
                      <h5 class="text-left w-100 mt-4 mb-2 text-muted">Favorite Lists</h5>

                      <!-- Display Favorite Lists -->
                      <div v-if="filteredFavoriteLists.length === 0">
                        <h5 class="text-left w-100 mt-4 mb-2 text-muted">No Favorite Lists Available</h5>
                      </div>
                      <div v-else>
                        <ul class="list-group w-100 shadow-sm">
                          <li
                              v-for="list in filteredFavoriteLists"
                              :key="list.id"
                              class="list-group-item d-flex justify-content-between align-items-center"
                              @click="fetchRestaurantsForList(list.id)"
                          >
                            <span class="text-dark">{{ list.name }}</span>
                            <span class="badge badge-secondary badge-pill">{{ list.restaurants.length }} restaurants</span>
                          </li>
                        </ul>
                      </div>

                      <!-- Display Restaurants in Selected List -->
                      <div v-if="selectedListRestaurants.length > 0" class="mt-4">
                        <h5 class="text-left w-100 mt-3 mb-2 text-muted">{{ selectedList?.name || 'No List Selected' }}</h5>
                        <ul class="list-group w-100 shadow-sm">
                          <li
                              v-for="restaurant in selectedListRestaurants"
                              :key="restaurant.id"
                              class="list-group-item d-flex justify-content-between align-items-center"
                          >
                            <span class="text-dark">{{ restaurant.name }}</span>
                          </li>
                        </ul>
                      </div>
                      <div v-else class="mt-4">
                        <h5 class="text-left w-100 mt-3 mb-2 text-muted">No Restaurants in Selected List</h5>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="container mt-4">
        <div class="row justify-content-center">
          <!-- Followers List -->
          <div class="col-md-5 mb-4">
            <div class="card shadow-sm border-0 rounded-lg">
              <div class="card-header text-center text-white py-2" style="background-color: #90CAF9;">
                <h5 class="mb-0">Followers</h5>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li 
                    v-for="follower in list_Followers" 
                    :key="follower.id" 
                    class="list-group-item d-flex justify-content-between align-items-center"
                    @click="navigateToUser(follower)"
                  >
                    <span>{{ follower.name }}</span>
                    <span class="text-muted small">{{ follower.email }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Following List -->
          <div class="col-md-5 mb-4">
            <div class="card shadow-sm border-0 rounded-lg">
              <div class="card-header text-center text-white py-2" style="background-color: #90CAF9;">
                <h5 class="mb-0">Following</h5>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li 
                    v-for="followed in list_Followings" 
                    :key="followed.id" 
                    class="list-group-item d-flex justify-content-between align-items-center"
                    @click="navigateToUser(followed)"
                  >
                    <span>{{ followed.name }}</span>
                    <span class="text-muted small">{{ followed.email }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <RestaurantModal
      :show="showRestaurantModal"
      :restaurant=selectedResto
      @update:show="showRestaurantModal = $event"
  />

</template>

<script>
import restaurant from "@/api/restaurant";
import userService from "../api/user";
import { VisiteService } from "@/api/Visite";

import RestaurantModal from "@/components/RestaurantModal.vue";
import Cookies from "js-cookie";

export default {

components: {RestaurantModal},
data() {
  return {
    user: null,
    masterUser: null,
    userScore: 0, // Variable to hold the user's score
    defaultAvatar: 'https://via.placeholder.com/150/000000/FFFFFF/?text=Avatar', // Default avatar if none exists
    allRestaurant: [],
    showRestaurantListModal: false, // Modal visibility
    recentRestaurants: [], // List of recently viewed restaurants with visit counts
    favoriteListName: '',
    showAllFavorites: 'user', // Default to showing user's own favorites
    filteredFavoriteLists: [], // Stores filtered lists based on user
    selectedList: null, // Stores the currently selected list
    selectedListRestaurants: [],
    selectedListRestaurantsName: [],
    recentlyViewed: [],
    recentlyViewedName: [],
    showModal: false,
    selectedRestaurant: {},
    showRestaurantModal: false,
    selectedResto: null,
    list_Followers: [],
    list_Followings: [],
    isFollowing: true
  };
},
created() {
  this.fetchUser();
  this.checkIfFollowing();
},
methods: {
  async fetchUser() {
    try {
      this.user = this.$route.params.id; 
      const response = await userService.getUserById(this.user.trim());
      this.user = response;
      this.fetchFollowersAndFollowing();
      this.fetchFavoriteListsUser();
      this.fetchRecentRestaurants();
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  },
  
  async openRestaurantModal(restaurantId) {
    try {
      const restaurantData = await restaurant.getRestaurantById(restaurantId);
      this.selectedResto = restaurantData;
      this.showRestaurantModal = true;
      console.log('modal open')
    } catch (error) {
      console.error('Error fetching restaurant details:', error);
    }
  },
  async fetchRecentRestaurants() {
  if (this.user) {
    try {
      const visites = await VisiteService.obtenirVisites(this.user.id);
      if (!visites) {
        this.recentRestaurants = [];
        this.userScore = 0;
        return;
      }

      const localRestaurants = [];
      const restaurantPromises = visites.map(async (visite) => {
        if (visite.restaurant_id) {
          const restaurantId = visite.restaurant_id;
          const visitCount = visites.filter(v => v.restaurant_id === restaurantId).length;
          const visitTimestamp = visite.date;
          const restaurantData = await restaurant.getRestaurantById(restaurantId);
          if (restaurantData && restaurantData.name) {
            localRestaurants.push({ 
              id: restaurantId, 
              name: restaurantData.name, 
              visitCount, 
              visitTimestamp 
            });
          }
        }
      });
      await Promise.all(restaurantPromises);
      localRestaurants.sort((a, b) => b.visitTimestamp - a.visitTimestamp);
      this.recentRestaurants = localRestaurants.slice(0, 5);
      this.fetchUserScore(localRestaurants);
    } catch (error) {
      console.error('Error fetching recent restaurants:', error);
      this.recentRestaurants = [];
      this.userScore = 0;
    }
  } else {
    this.recentRestaurants = [];
    this.userScore = 0;
  }
},
  fetchUserScore() {
    this.userScore = this.recentRestaurants.reduce(
      (total, restaurant) => total + restaurant.visitCount * 10,
      0
    );
  },
  navigateToUser(selectedUser) {
      this.$router.push(`/user/${selectedUser.id}`);
    },
  async fetchAllRestaurant() {
    try {
      const response = await restaurant.getAllRestaurants();
      this.allRestaurant = response.data;
    } catch (error) {
      console.error('Error fetching all restaurants:', error);
    }
  },
  async fetchFavoriteListsUser() {
    const response = await userService.getUserFavorites(this.user.id); // Fetch all favorite lists
       // Log the response

      if (response && response.items) {
        this.filteredFavoriteLists = response.items.filter(list => list.owner.id === this.user.id);
        console.log(this.filteredFavoriteLists)
      } else {
        this.filteredFavoriteLists = [];
      }
  },
  async fetchvisitedRestaurant() {
    try {
        const response = await VisiteService.obtenirVisites(this.user.id);
        
        if (response && response.items) {
          this.recentlyViewed = response.items;
          this.recentlyViewed.forEach(items => {
            this.getRecentlyRestaurantNameById(items.restaurant_id);
          });
        } else {
          this.recentlyViewed = [];
        }
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
  },
  fetchFollowersAndFollowing() {
    const followersData = this.user.followers;
    const followingData = this.user.following;
    // Mettre à jour les listes dans le composant
    this.list_Followers = followersData;
    this.list_Followings = followingData;
  },
  async getRestaurantNameById(restaurantId) {
      try {
        const response = await restaurant.getRestaurantById(restaurantId);  // Call the API with the restaurantId
        //console.log('Restaurant Name Response:', response);  // Log the response

        if (response && response.name) {
          this.selectedListRestaurantsName[restaurantId] = response.name;  // Store the restaurant name by restaurantId
        } else {
          this.selectedListRestaurantsName[restaurantId] = 'Unknown Restaurant';  // Default if name is not found
        }
      } catch (error) {
        console.error('Error fetching restaurant name for ID:', restaurantId, error);
      }
    },

  async getRecentlyRestaurantNameById(restaurantId) {
    try {
      const response = await restaurant.getRestaurantById(restaurantId);  // Call the API with the restaurantId
      // console.log('Restaurant Name Response:', response);  // Log the response

      if (response && response.name) {
        this.recentlyViewedName[restaurantId] = response.name;  // Store the restaurant name by restaurantId
      } else {
        this.recentlyViewedName[restaurantId] = 'Unknown Restaurant';  // Default if name is not found
      }
    } catch (error) {
      console.error('Error fetching restaurant name for ID:', restaurantId, error);
    }
  },

  //TODO WHAT PASS IN TOKKEN IF THE USER RESPONSE IS PASS OR NOT 
  async checkIfFollowing() {
      try {
        const masterUserId = Cookies.get("userId");
        this.masterUser = await userService.getUserById(masterUserId);
        this.isFollowing = this.masterUser.following.some(following => following.id === this.user.id);
      } catch (error) {
        console.error('Error checking if following:', error);
      }
    },
  toggleFollow() {
    try {
      if (this.isFollowing) {
        // Unfollow the user
        userService.postUnfollowUser(this.user.id);
      } else {
        // Follow the user
        userService.postFollowUser(this.user.id);
      }
      this.isFollowing = !this.isFollowing;
    } catch (error) {
      console.error('Error toggling follow:', error);
    }
  },
    openModal(restaurant) {
      this.selectedRestaurant = restaurant;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedRestaurant = {};
    }
},
};
</script>

<style scoped>
.container {
  max-width: 900px;
}

.card {
  border-radius: 12px;
}
.card {
overflow: hidden;
}

.corner-button {
position: absolute;
top: 20px; 
right: 20px; 
z-index: 10;
}

.card-header {
  background-color: #90CAF9; /* Soft blue color */
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.rounded-circle {
  border: 2px solid #fff; /* White border around the avatar */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for a 3D effect */
}

.list-group-item {
  font-size: 1rem;
  transition: background-color 0.3s ease;
  border: none;
  background-color: #f8f9fa;
}

.list-group-item:hover {
  background-color: #e9ecef; /* Light hover effect */
}

.badge-primary {
  background-color: #90CAF9; /* Soft blue color */
  color: #fff;
}

.badge-light {
  background-color: #fff;
  color: #6c757d; /* Subtle gray to complement the soft blue theme */
  font-size: 0.9rem;
}

.card-footer {
  background-color: #f8f9fa;
  font-size: 0.9rem;
}

.btn-outline-dark {
  border-color: #343a40;
  color: #343a40;
  transition: 0.3s;
}

.btn-outline-dark:hover {
  background-color: #343a40;
  color: #fff;
}

.img-fluid {
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}
</style>