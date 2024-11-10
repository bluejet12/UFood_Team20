<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-20 col-lg-20">
        <div class="card shadow-sm border-0 rounded-lg">
          <div class="row g-0">
            <!-- Profile Details Section -->
            <div class="col-md-6">
              <div class="card-header text-center text-white py-4" style="background-color: #90CAF9;">
                <h2 class="mb-0">Your Profile UFood</h2>
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
                  <h4 class="mb-2 text-dark font-weight-bold">{{ user?.displayName || 'Anonymous User' }}</h4>

                  <!-- Display User Score -->
                  <div class="user-score mb-4">
                    <h5 class="text-secondary">
                      Your Score:
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
                        @click="openModal(restaurant)"
                      >
                        <!-- Display Restaurant Name -->
                        <span class="text-dark">{{ restaurant.name || 'Loading name...' }}</span>

                        <!-- Display Visit Count -->
                        <span class="badge badge-primary badge-pill">{{ restaurant.visitCount }} visits</span>
                      </li>
                    </ul>

                    <!-- If no recently viewed restaurants, show this message -->
                    <div v-else class="text-center mt-4">
                      <p class="text-muted">No recently viewed restaurants yet.</p>
                      <a href="#" @click.prevent="navigateToHome" class="btn btn-outline-dark btn-sm">
                        Explore Restaurants
                      </a>
                    </div>

                  <!-- Display Favorite Lists -->
                  <h5 class="text-left w-100 mt-4 mb-2 text-muted">Your Favorite Lists</h5>
                  <div class="mb-3">
                    <label>
                      <input
                          type="radio"
                          v-model="showAllFavorites"
                          value="all"
                          class="form-check-input"
                      />
                      All Favorite Lists
                    </label>
                    <label class="ml-3">
                      <input
                          type="radio"
                          v-model="showAllFavorites"
                          value="user"
                          class="form-check-input"
                      />
                      Your Favorite Lists
                    </label>
                  </div>

                  <!-- Display Favorite Lists -->
                  <div v-if="filteredFavoriteListsComputed.length === 0">
                    <h5 class="text-left w-100 mt-4 mb-2 text-muted">Create Your Favorite List</h5>
                    <div class="mb-3">
                      <input
                          type="text"
                          v-model="favoriteListName"
                          class="form-control"
                          placeholder="Enter favorite list name"
                      />
                      <button
                          @click="createFavoriteList"
                          class="btn btn-primary mt-2"
                          :disabled="!favoriteListName.trim()"
                      >
                        Create Favorite List
                      </button>
                    </div>
                  </div>
                  <div v-else>
                    <ul class="list-group w-100 shadow-sm">
                      <li
                          v-for="list in filteredFavoriteListsComputed"
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
                  <div v-if="selectedListRestaurants.length >= 0" class="mt-4">
                    <div class="d-flex align-items-center mb-4">
                      <!-- Restaurant List Name and Edit Button -->
                      <h5 class="text-left w-100 mt-3 mb-2 text-muted d-flex align-items-center">
      <span v-if="isEditingName" class="mr-2">
        <input
            v-model="editedListName"
            class="form-control d-inline-block w-auto"
            type="text"
        />
      </span>
                        <span v-else>{{ selectedList?.name || 'No List Selected' }}</span>

                        <!-- Edit List Name Button -->
                        <button v-if="!isEditingName" @click="editListName" class="btn btn-warning btn-sm ml-3">
                          <i class="fa fa-edit"></i> Edit
                        </button>

                        <!-- Save List Name Button -->
                        <button v-if="isEditingName" @click="saveListName" class="btn btn-primary btn-sm ml-3">
                          <i class="fa fa-save"></i> Save
                        </button>
                        <!-- Add Restaurant to List -->
                        <div class="mb-3">
                          <button @click="toggleRestaurantListModal" class="btn btn-success btn-sm ml-3">
                            <i class="fa fa-plus"></i> Add Restaurant to Favorite List
                          </button>
                        </div>

                        <!-- Delete List -->
                        <div class="mb-3">
                          <button @click.stop="deleteFavoriteList(selectedList.id)" class="btn btn-danger btn-sm ml-3">
                            <i class="fa fa-trash"></i> Delete List
                          </button>
                        </div>
                      </h5>
                    </div>



                    <!-- Restaurant List Modal Component -->
                    <RestaurantModal
                        :show="showRestaurantListModal"
                        :allRestaurants="allRestaurant"
                        @update:show="showRestaurantListModal = $event"
                        @add-restaurants="addRestaurantToFavoriteList"
                    />
                    <!-- Visite ReadOnly Modal Component -->
                    <ModalVisiteReadOnly 
                      v-if="showModal" 
                      :restaurantId="selectedRestaurant.id" 
                      :nomRestaurant="selectedRestaurant.name"
                      @fermer="closeModal"
                    />

                    <!-- Display Restaurants in the List -->
                    <ul class="list-group w-100 shadow-sm">
                      <li v-if="selectedListRestaurants.length === 0" class="list-group-item text-center">
                        No Restaurant
                      </li>

                      <!-- Loop through the restaurants if they exist -->
                      <li v-for="restaurant in selectedListRestaurants" :key="restaurant.id" class="list-group-item d-flex justify-content-between align-items-center">
                        {{ selectedListRestaurantsName[restaurant.id] || 'Loading name...' }}
                        <button @click="deleteRestaurantToFavoriteList(restaurant.id)" class="btn btn-danger btn-sm ml-2">
                          <i class="fa fa-trash"></i> Remove
                        </button>
                      </li>
                    </ul>
                  </div>


                </div>
              </div>
            </div>

            <!-- Image Section -->
            <div class="col-md-6 d-none d-md-block">
              <img
                  src="@/assets/ProfilePage.png"
                  alt="Profile Illustration"
                  class="img-fluid rounded-end"
                  style="object-fit: contain; width: 100%; height: auto;" />
            </div>
          </div>
          <div class="card-footer bg-light text-center">
            <small class="text-muted">Keep exploring to earn more points!</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from '../../firebaseConfig'; // Adjust the path as needed
import { onAuthStateChanged } from 'firebase/auth';
import favorites from "../api/favorites";
import restaurant from "@/api/restaurant";
import RestaurantModal from "@/components/RestaurantModal.vue";
import {VisiteService} from "@/api/Visite";
import ModalVisiteReadOnly from './ModalVisiteReadOnly.vue';


export default {
  name: 'ProfilePage',
  components: {RestaurantModal,ModalVisiteReadOnly},
  data() {
    return {
      user: null,
      userScore: 0, // Variable to hold the user's score
      defaultAvatar: 'https://via.placeholder.com/150/000000/FFFFFF/?text=Avatar', // Default avatar if none exists
      allRestaurant :[],
      showRestaurantListModal: false, // Modal visibility
      recentRestaurants: [], // List of recently viewed restaurants with visit counts
      favoriteListName: '',
      showAllFavorites: 'user', // Default to showing user's own favorites
      filteredFavoriteLists: [], // Stores filtered lists based on user
      showAllFavoritesData: [], // Stores all favorite lists
      selectedList: null, // Stores the currently selected list
      selectedListRestaurants: [],
      selectedListRestaurantsName: [],
      isEditingName: false, // Flag to toggle between view and edit mode
      editedListName: '', // Temporarily holds the edited list name
      recentlyViewed: [],
      recentlyViewedName: [],
      showModal: false,
      selectedRestaurant: {}
    };
  },
  created() {
    this.fetchUser();
    this.fetchRecentRestaurants();
    this.fetchFavoriteLists();
    this.fetchFavoriteListsUser();
    this.fetchAllRestaurant();
    this.fetchvisitedRestaurant();
  },
  methods: {
    editListName() {
      if (this.selectedList) {
        this.isEditingName = true;
        this.editedListName = this.selectedList.name; // Pre-fill with the current list name
      } else {
        console.error("No list selected to edit.");
      }
    },
    fetchUser() {
      // Fetch authenticated user data from Firebase
      onAuthStateChanged(auth, (user) => {
        this.user = user;
        if (user) {
          this.fetchRecentRestaurants();
        }
      });
    },
    toggleRestaurantListModal() {
      this.showRestaurantListModal = !this.showRestaurantListModal;  // Toggle modal visibility
    },
    async fetchRecentRestaurants() {
      const user = auth.currentUser;
      if (user) {
        const visites = await VisiteService.obtenirVisites(user.uid);
        
        
        const localRestaurants = [];
       
        const restaurantPromises = visites.map(async (visite) => {
          if (visite.restaurant_id) {
            const restaurantId = visite.restaurant_id;
            const visitCount = visites.filter(v => v.restaurant_id === restaurantId).length;
            const visitTimestamp = visite.date;

            // Await restaurant name retrieval
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

        // Wait for all restaurantPromises to complete
        await Promise.all(restaurantPromises);
        console.log('Recent Restaurants ARRAY:', localRestaurants);
        //using the visitTimestamp to sort the restaurants : not the best way to do it :(
        localRestaurants.sort((a, b) => b.visitTimestamp - a.visitTimestamp);


        // Get the 5 most recent restaurants visitied by the user
        // We can adjust the number of restaurants to display as needed
        this.recentRestaurants = localRestaurants.slice(0, 5);
        //console.log('Recent Restaurants Response:', this.recentRestaurants);

        this.fetchUserScore(localRestaurants);
        
      } else {
        this.recentRestaurants = [];
        this.userScore = 0;
      }
    },

    fetchUserScore() {
      // Mock score value, replace this logic with actual score fetching from your backend
      // For example, fetching score from a Firestore database or other backend service
      this.userScore = this.recentRestaurants.reduce(
          (total, restaurant) => total + restaurant.visitCount * 10,
          0
      ); // Example: 10 points per visit
    },
    navigateToHome() {
      // Navigate to the homepage
      this.$router.push('/');
    },

    async createFavoriteList() {
      try {
        // Call the API to create the favorite list
        const response = await favorites.postFavorite(this.favoriteListName, 'tb@test.fr');

        if (response && response.id) {
          console.log('Favorite list created:', response);
          this.favoriteListName = ''; // Reset the input field
        } else {
          console.error('Failed to create favorite list');
        }
      } catch (error) {
        console.error('Error creating favorite list:', error);
      }
    },
    async fetchFavoriteLists() {
      const response = await favorites.getFavorites(); // Call the API to fetch the lists
      console.log('Favorite ALL Lists Response:', response); // Log the response
      if (response && response.items) {
        this.showAllFavoritesData = response.items;
      } else {
        this.showAllFavoritesData = [];
      }
    },
    async fetchFavoriteListsUser() {
      const response = await favorites.getFavorites(); // Fetch all favorite lists
      console.log('All Favorite Lists Response:', response); // Log the response

      if (response && response.items) {
        // Filter the favorite lists where owner.id is '618e8c6709dd9f0004fd6a97'
        this.filteredFavoriteLists = response.items.filter(list => list.owner.id === '618e8c6709dd9f0004fd6a97');
      } else {
        this.filteredFavoriteLists = [];
      }
    },

    async fetchRestaurantsForList(listId) {
      try {
        const response = await favorites.getFavoriteById(listId);

        if (response && response.restaurants) {
          this.selectedListRestaurants = response.restaurants;
          this.selectedList = response;
          this.selectedListRestaurants.forEach(restaurant => {
            this.getRestaurantNameById(restaurant.id);
          });

        } else {
          this.selectedListRestaurants = [];
        }
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    },

    async fetchvisitedRestaurant() {
      try {
        const response = await VisiteService.obtenirVisites('61916127f8f8790004fd287e');
        
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

    async fetchAllRestaurant() {
      const response = await restaurant.getRestaurants(); // Call the API to fetch the lists
      if (response && response.items) {
        this.allRestaurant = response.items;
      } else {
        this.allRestaurant = [];
      }
    },

    async addRestaurantToFavoriteList(restaurantId) {
      try {
        // Call the API to create the favorite list
        const response = await favorites.postFavoriteRestaurant(this.selectedList.id, restaurantId);

        if (response && response.id) {
          console.log('Restaurant added:', response);
          this.fetchRestaurantsForList(this.selectedList.id);
          this.fetchFavoriteListsUser();
          this.fetchFavoriteLists();
        } else {
          console.error('Failed to add restaurant');
        }
      } catch (error) {
        console.error('Error adding restaurant:', error);
      }
    },

    async deleteRestaurantToFavoriteList(restaurantId) {
      try {
        // Call the API to create the favorite list
        const response = await favorites.deleteFavoriteRestaurant(this.selectedList.id, restaurantId);

        if (response && response.id) {
          console.log('Restaurant delete:', response);
          this.fetchRestaurantsForList(this.selectedList.id);
          this.fetchFavoriteListsUser();
          this.fetchFavoriteLists();
        } else {
          console.error('Failed to delete restaurant');
        }
      } catch (error) {
        console.error('Error delete restaurant:', error);
      }
    },

    async deleteFavoriteList() {
      try {
        // Call the API to create the favorite list
        const response = await favorites.deleteFavoriteById(this.selectedList.id);

        if (response) {
          console.log('List delete:', response);
          this.selectedList = null;
          this.selectedListRestaurants = [];
          this.fetchFavoriteListsUser();
          this.fetchFavoriteLists();
        } else {
          console.error('Failed to delete restaurant');
        }
      } catch (error) {
        console.error('Error delete restaurant:', error);
      }
    },
    async saveListName() {
      try {
        const response = await favorites.putFavoriteById(this.selectedList.id, this.editedListName,'tb@test.fr');

        if (response) {
          this.selectedList.name = this.editedListName; // Update the list name in the UI
          this.isEditingName = false; // Switch back to view mode
        }
      } catch (error) {
        console.error('Error saving list name:', error);
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
  computed: {
    // Dynamically filter based on the radio button value ('user' or 'all')
    filteredFavoriteListsComputed() {
      if (this.showAllFavorites === 'all') {
        return this.showAllFavoritesData; // Show all favorite lists
      } else if (this.showAllFavorites === 'user') {
        return this.filteredFavoriteLists; // Show only the user's favorite lists
      }
      return []; // Default case, no lists
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
