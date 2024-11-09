<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-10 col-lg-8">
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
                  <h5 class="text-left w-100 mt-3 mb-2 text-muted">Recently Viewed Restaurants</h5>
                  <ul v-if="recentRestaurants.length > 0" class="list-group w-100 shadow-sm">
                    <li
                        v-for="restaurant in recentRestaurants"
                        :key="restaurant.id"
                        class="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <span class="text-dark">{{ restaurant.name }}</span>
                      <span class="badge badge-primary badge-pill">{{ restaurant.visitCount }} visits</span>
                    </li>
                  </ul>
                  <div v-else class="text-center mt-4">
                    <p class="text-muted">No recently viewed restaurants yet.</p>
                    <a href="#" @click.prevent="navigateToHome" class="btn btn-outline-dark btn-sm">
                      Explore Restaurants
                    </a>
                  </div>

                  <!-- Display Favorite Lists -->
                  <h5 class="text-left w-100 mt-4 mb-2 text-muted">Your Favorite Lists</h5>
                  <!-- Filter Options -->
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
                  <ul v-if="filteredFavoriteListsComputed.length > 0" class="list-group w-100 shadow-sm">
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

                  <div v-else class="text-center mt-4">
                    <p class="text-muted">No favorite lists yet.</p>
                  </div>

                  <!-- Display Restaurants in Selected List -->
                  <div v-if="selectedListRestaurants.length > 0" class="mt-4">
                    <h5 class="text-left w-100 mt-3 mb-2 text-muted">
                      Restaurants in "{{ selectedList.name }}"
                    </h5>
                    <ul class="list-group w-100 shadow-sm">
                      <li v-for="restaurant in selectedListRestaurants" :key="restaurant.id" class="list-group-item">
                        {{ getRestaurantNameById(restaurant.id) }}
                      </li>
                    </ul>
                  </div>

                  <!-- Create New Favorite List Section -->
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
import restaurants from "../data/restaurant_list.json";
import favorites from "../api/favorites";


export default {
  name: 'ProfilePage',
  data() {
    return {
      user: null,
      userScore: 0, // Variable to hold the user's score
      defaultAvatar: 'https://via.placeholder.com/150/000000/FFFFFF/?text=Avatar', // Default avatar if none exists
      recentRestaurants: [], // List of recently viewed restaurants with visit counts
      favoriteListName: '',
      showAllFavorites: 'user', // Default to showing user's own favorites
      filteredFavoriteLists: [], // Stores filtered lists based on user
      showAllFavoritesData: [], // Stores all favorite lists
      selectedList: null, // Stores the currently selected list
      selectedListRestaurants: [],
    };
  },
  created() {
    this.fetchUser();
    this.fetchRecentRestaurants();
    this.fetchFavoriteLists();
    this.fetchFavoriteListsUser();
  },
  methods: {
    fetchUser() {
      // Fetch authenticated user data from Firebase
      onAuthStateChanged(auth, (user) => {
        this.user = user;
        if (user) {
          this.fetchRecentRestaurants();
        }
      });
    },
    async fetchRecentRestaurants() {
      const user = auth.currentUser;
      if (user) {
        const localRestaurants = [];
        const keys = Object.keys(localStorage);

        keys.forEach(key => {
          if (key.startsWith(`visitCount-${user.uid}-`)) {
            const restaurantId = key.split('-')[2]; // Extract restaurant ID from key
            const visitCount = parseInt(localStorage.getItem(key));
            const visitTimestamp = parseInt(localStorage.getItem(`visitTimestamp-${user.uid}-${restaurantId}`)) || 0;

            // Get restaurant name by fetch Id
            const restaurantName = this.getRestaurantNameById(restaurantId);

            if (restaurantName) {
              localRestaurants.push({id: restaurantId, name: restaurantName, visitCount, visitTimestamp});
            }
          }
        });

        //using the visitTimestamp to sort the restaurants : not the best way to do it :(
        localRestaurants.sort((a, b) => b.visitTimestamp - a.visitTimestamp);


        // Get the 5 most recent restaurants visitied by the user
        // We can adjust the number of restaurants to display as needed
        this.recentRestaurants = localRestaurants.slice(0, 5);

        this.fetchUserScore(localRestaurants);
      } else {
        this.recentRestaurants = [];
        this.userScore = 0;
      }
    },
    getRestaurantNameById(restaurantId) {
      const restaurant = restaurants.find(r => r.id === restaurantId);
      return restaurant ? restaurant.name : null;
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
      /*const token = getAuthToken(); // Get the auth token from local storage
      if (!token || !this.favoriteListName.trim()) {
        console.error('Invalid token or favorite list name');
        return;
      }*/

      try {
        // Call the API to create the favorite list
        const response = await favorites.postFavorite(this.favoriteListName, 'tb@test.fr');

        if (response && response.id) {
          // Handle success (reset input field, display a success message, etc.)
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
          console.log('Fetched Restaurants:', response);

          if (response && response.restaurants) {
            this.selectedListRestaurants = response.restaurants;
            this.selectedList = response;
          } else {
            this.selectedListRestaurants = [];
          }
        } catch (error) {
          console.error('Error fetching restaurants:', error);
        }
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
