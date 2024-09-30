<!-- src/components/MainNavbar.vue -->
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
    <div class="container-fluid">
      <!-- Logo Image -->
      <a class="navbar-brand d-flex align-items-center" href="/">
        <img src="@/assets/logo-noName.png" alt="UFood Logo" class="logo" />
        <img src="@/assets/logo-name.png" alt="UFood Logo" class="logo" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <div class="form-inline mr-auto custom-right-margin position-relative search-container">
    <!-- Search Bar -->
        <input
          class="form-control mr-sm-2 search-bar"
          type="search"
          v-model="searchQuery"
          placeholder="Search restaurants"
          aria-label="Search"
          @input="SearchRestaurants"
        />

        <!-- Suggestion Dropdown List -->
        <ul 
          v-if="filteredSuggestions.length"
          class="list-group position-absolute suggestion-dropdown" 
        >
          <li
            v-for="(suggestion, index) in filteredSuggestions"
            :key="index"
            class="list-group-item list-group-item-action"
            @click="navigateToRestaurant(suggestion)"
          >
              {{ suggestion.name }}
            </li>
          </ul>
        </div>

        <ul class="navbar-nav ml-auto">
          <!-- User Auth Logic -->
          <li class="nav-item" v-if="!user">
            <a @click="navigateToLogin" class="btn btn-outline-primary">Sign In</a>
          </li>
          <li class="nav-item dropdown d-flex align-items-center" v-else>
            <img
              :src="user.photoURL || defaultAvatar"
              class="rounded-circle shadow-sm"
              alt="User Avatar"
              style="width: 40px; height: 40px; object-fit: cover; border: 2px solid #90CAF9;"
            />
            <span class="ml-2 text-dark font-weight-bold">{{ user.displayName || 'User' }}</span>
            <a
              class="nav-link dropdown-toggle d-flex align-items-center"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ></a>
            <div class="dropdown-menu dropdown-menu-right shadow" aria-labelledby="userDropdown">
              <a class="dropdown-item" href="#" @click="navigateToProfile">Profile Page</a>
              <a class="dropdown-item" href="#" @click="logoutUser">Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import restaurants from "../data/restaurant_list.json";



export default {
  name: 'MainNavbar',
  data() {
    return {
      searchQuery: '',
      restaurants: restaurants || { restaurants: [] },
      filteredSuggestions: [], 
      user: null,
      defaultAvatar: 'https://via.placeholder.com/150/000000/FFFFFF/?text=Avatar', // Fallback avatar
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      onAuthStateChanged(auth, (user) => {
        this.user = user;
      });
    },
    navigateToLogin() {
      this.$router.push('/login');
    },
    navigateToProfile() {
      this.$router.push('/profile');
    },
    async logoutUser() {
      try {
        await signOut(auth);
        this.user = null;
        this.$router.push('/');
      } catch (error) {
        console.error('Error logging out:', error);
      }
    },
    SearchRestaurants() {
      if (this.searchQuery.length > 0) {
        // Filter restaurants based on input
        this.filteredSuggestions = this.restaurants.filter(restaurant =>
          restaurant.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        this.filteredSuggestions = [];
      }
    },
    selectSuggestion(name) {

      this.searchQuery = name;
      this.filteredSuggestions = []; 
    },
async navigateToRestaurant(restaurant) {
  const user = auth.currentUser;
  // Check if user is authenticated
  if (user) {
    const userKey = `visitCount-${user.uid}-${restaurant.id}`;
    //use the localData to store the visit count
    let visitCount = parseInt(localStorage.getItem(userKey)) || 0;
    // Increment the visit count
    visitCount += 1;
    // Save the visit count of the user
    localStorage.setItem(userKey, visitCount);

    this.$router.push(`/restaurant/${restaurant.id}`);

    // Clear the search query
    this.searchQuery = '';
    this.filteredSuggestions = [];
  } 
},
  },
};
</script>
<style scoped>
/* Small screen style only*/ 
@media (max-width: 576px) {
  .search-container {
    width: 50%; 
    margin-left: 0; 
  }

  .search-bar {
    width: 70%; 
    margin-top: 8px;
    margin-right: 0; 
  }

  .suggestion-dropdown {
    width:  70%; 
    margin-top: 3px;
  }
}

.suggestion-dropdown {
  top: 45px; 
  left: 0;
  right: 0;
  z-index: 1000;
}
.navbar {
  border-bottom: 2px solid #e9ecef; /* Light border for separation */
}

.logo {
  height: 40px;
  object-fit: contain;
}

.form-control {
  border-radius: 20px;
  border: 1px solid #90CAF9; /* Soft blue border */
}

.btn-outline-primary {
  border-color: #90CAF9;
  color: #90CAF9;
  transition: all 0.3s;
}

.btn-outline-primary:hover {
  background-color: #90CAF9;
  color: #fff;
}

.rounded-circle {
  cursor: pointer;
  transition: all 0.3s;
}

.rounded-circle:hover {
  transform: scale(1.05);
}

.dropdown-menu {
  border: none;
  border-radius: 8px;
}
.custom-right-margin {
  margin-left: 230px;
}
</style>
