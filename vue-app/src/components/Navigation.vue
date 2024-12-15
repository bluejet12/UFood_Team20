<!-- src/components/Navigation.vue -->
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
        <div 
          class="form-inline mr-auto custom-right-margin position-relative search-container"
          ref="restaurantInputContainer"
        >
          <input
            class="form-control mr-sm-2 search-bar"
            type="search"
            v-model="searchQuery"
            placeholder="Search restaurants"
            aria-label="Search"
            ref="restaurantInput"
            @input="searchRestaurants"
            @focus="showDropdown"
            @blur="hideDropdown"
          />

          <ul 
            v-if="filteredRestaurantSuggestions.length && isDropdownVisible"
            class="list-group position-absolute suggestion-dropdown" 
          >
            <li
              v-for="(suggestion, index) in filteredRestaurantSuggestions"
              :key="index"
              class="list-group-item list-group-item-action"
              @mousedown.prevent="selectSuggestion(suggestion)"
            >
              {{ suggestion.name }}
            </li>
          </ul>
        </div>

        <div
          v-if="!user"
          class="form-inline ml-3 position-relative search-container"
          ref="userInputContainer"
        >
          <input
            class="form-control mr-sm-2 search-bar"
            type="search"
            v-model="userSearchQuery"
            placeholder="Search users"
            aria-label="Search"
            ref="userInput"
            @input="searchUsers"
            @focus="showUserDropdown"
            @blur="hideUserDropdown"
          />

          <ul
            v-if="filteredUserSuggestions.length && isUserDropdownVisible"
            class="list-group position-absolute suggestion-dropdown"
          >
            <li
              v-for="(user, index) in filteredUserSuggestions"
              :key="index"
              class="list-group-item list-group-item-action"
              @mousedown.prevent="selectUserSuggestion(user)"
            >
              {{ user.name }}
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
              style="width: 40px; height: 40px; object-fit: cover; border: 2px solid #90CAF9;"/>
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
import restaurant from '@/api/restaurant'; // Importing the API function
import userService from '@/api/user';

export default {
  name: 'NavigationBar',
  data() {
    return {
      searchQuery: '',
      userSearchQuery: '',
      restaurants: [],  // Initially an empty array to be populated from API
      users: [],
      filteredRestaurantSuggestions: [],
      filteredUserSuggestions: [],
      user: null,
      isDropdownVisible: false,
      isUserDropdownVisible: false,
      defaultAvatar: 'https://via.placeholder.com/150/000000/FFFFFF/?text=Avatar', // Fallback avatar
    };
  },
  created() {
    this.fetchUser();
    this.loadRestaurants();  // Load restaurants on component creation
    this.loadUserList();
  },
  methods: {
    fetchUser() {
      onAuthStateChanged(auth, (user) => {
        this.user = user;
      });
      this.user = localStorage.getItem('userId');
      console.log(this);
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
    async loadRestaurants() {
      try {
        const response = await restaurant.getRestaurants();  // Fetch the restaurant data
        this.restaurants = response.items || [];  // Assuming response.data contains the restaurant array
      } catch (error) {
        console.error('Error loading restaurants:', error);
      }
      console.log(this.restaurants);
    },
    async loadUserList() {
      try {
        const response = await userService.getListUser();
        console.log(response.items);
        if (response && response.items) {
          this.users = response.items; // Assuming response.data contains the user list
        } else {
          console.error('Error fetching users: Response data is undefined');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
      console.log(this.users);
    },
    showUserDropdown() {
      this.isUserDropdownVisible = true;
    },
    hideUserDropdown() {
      setTimeout(() => {
        this.isUserDropdownVisible = false;
      }, 100);
    },
    selectUserSuggestion(user) {
      this.navigateToUserProfile(user);
      this.isUserDropdownVisible = false;
      this.$refs.userInput.blur(); // Lose focus of the input
      this.userSearchQuery = ''; // Clear the search query
    },
    searchUsers() {
      if (this.userSearchQuery.length > 0) {
        this.filteredUserSuggestions = this.users.filter((user) =>
          user.name.toLowerCase().includes(this.userSearchQuery.toLowerCase())
        );
      } else {
        this.filteredUserSuggestions = [];
      }
    },
    searchRestaurants() {
      if (this.searchQuery.length > 0) {
        this.filteredRestaurantSuggestions = this.restaurants.filter((restaurant) =>
          restaurant.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        this.filteredRestaurantSuggestions = [];
      }
    },
    navigateToRestaurant(restaurant) {
      this.$router.push(`/restaurant/${restaurant.id}`);
    },
    navigateToUserProfile(user) {
      this.$router.push(`/user/${user.id}`);
    },
    showDropdown() {
      this.isDropdownVisible = true;
    },
    hideDropdown() {
      setTimeout(() => {
        this.isDropdownVisible = false;
      }, 100);
    },
    selectSuggestion(suggestion) {
      this.navigateToRestaurant(suggestion); 
      this.isDropdownVisible = false;
      this.$refs.restaurantInput.blur(); // Lose focus of the input
      this.searchQuery = ''; // Clear the search query
    },
  }
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