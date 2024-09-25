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
        <form class="form-inline mx-auto d-flex">
          <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search restaurants"
              aria-label="Search"
              style="width: 300px;"
          />
          <button class="btn btn-outline-primary ml-2" type="submit">
            Search
          </button>
        </form>
        <ul class="navbar-nav ml-auto">
          <!-- Display Sign In if the user is not authenticated -->
          <li class="nav-item" v-if="!user">
            <a @click="navigateToLogin" class="btn btn-outline-primary">
              Sign In
            </a>
          </li>
          <!-- Display avatar with user name and dropdown menu if the user is authenticated -->
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

export default {
  name: 'MainNavbar',
  data() {
    return {
      user: null,
      defaultAvatar: 'https://via.placeholder.com/150/000000/FFFFFF/?text=Avatar', // Fallback avatar
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      // Listen for changes in the authentication state
      onAuthStateChanged(auth, (user) => {
        this.user = user;
      });
    },
    navigateToLogin() {
      console.log('Navigating to login');
      this.$router.push('/login')
          .then(() => {
            console.log('Navigation to login successful');
          })
          .catch((error) => {
            console.error('Navigation error:', error); // This will catch any routing errors
          });
    },
    navigateToProfile() {
      // Navigate to the profile page (update the route as necessary)
      this.$router.push('/profile');
    },
    async logoutUser() {
      // Log out the user and navigate to the home page
      try {
        await signOut(auth);
        this.user = null;
        this.$router.push('/'); // Redirect to home or another page after logout
      } catch (error) {
        console.error('Error logging out:', error);
      }
    },
  },
};
</script>

<style scoped>
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
</style>
