<!-- src/components/ProfilePage.vue -->
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
                    <h5 class="text-secondary">Your Score:
                      <span class="badge badge-pill badge-light px-3 py-2">{{ userScore }} Points</span>
                    </h5>
                  </div>

                  <!-- Display Recently Viewed Restaurants or Show Link to Home if None -->
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
                    <a
                        href="#"
                        @click.prevent="navigateToHome"
                        class="btn btn-outline-dark btn-sm"
                    >
                      Explore Restaurants
                    </a>
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
                  style="object-fit: cover; height: 100%; width: 100%;"
              />
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

export default {
  name: 'ProfilePage',
  data() {
    return {
      user: null,
      userScore: 0, // Variable to hold the user's score
      defaultAvatar: 'https://via.placeholder.com/150/000000/FFFFFF/?text=Avatar', // Default avatar if none exists
      recentRestaurants: [], // List of recently viewed restaurants with visit counts
    };
  },
  created() {
    this.fetchUser();
    this.fetchRecentRestaurants();
    this.fetchUserScore();
  },
  methods: {
    fetchUser() {
      // Fetch authenticated user data from Firebase
      onAuthStateChanged(auth, (user) => {
        this.user = user;
      });
    },
    fetchRecentRestaurants() {
      // Mock data for recently viewed restaurants with visit counts
      // Replace this with your actual logic to fetch recently viewed restaurants
      this.recentRestaurants = [
        { id: 1, name: 'Mon Lapin', visitCount: 3 },
        { id: 2, name: 'Kitano Shokudo', visitCount: 5 },
        { id: 3, name: 'Mastard', visitCount: 2 },
      ];
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
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for a 3D effect */
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
