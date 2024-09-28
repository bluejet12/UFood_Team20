<template>
  <div class="home-page d-flex  mt-5">

    <!-- Search and Filter Section -->
    <div class="container">
      <div class="input-group mb-3">
        <input
            type="text"
            v-model="searchQuery"
            class="form-control"
            style="width: 200px;"
            placeholder="Search for a restaurant"
            @input="filterRestaurants"
        />
        <select class="form-select ml-2" v-model="selectedType" @change="filterRestaurants">
          <option value="">All</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Vegan">Vegan</option>
          <option value="Coffee">Coffee</option>
        </select>

        
        <select class="form-select ml-2" v-model="selectedPriceRange" @change="filterRestaurants" style="width: 50px;">
          <option value="">All Prices</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

      </div>

      <!-- Filtered Restaurants List -->
      <ul class="list-group list-unstyled">
        <li 
          class="list-group-item" 
          v-for="restaurant in filteredRestaurants" 
          :key="restaurant.id"
          @click="handleClick(restaurant)"
          style="cursor: pointer;"
        >
          <strong>{{ restaurant.name }}</strong> -
          {{ restaurant.genres.join(', ') }} -
          {{ '$'.repeat(restaurant.price_range)}} -
          {{ restaurant.rating }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import restaurants from "../data/restaurant_list.json";
import { getAuth } from "firebase/auth"; // Import Firebase Auth

export default {
  name: "HomePageComponent",
  data() {
    return {
      searchQuery: '',
      selectedType: '',
      selectedPriceRange: '',
      restaurants: restaurants || {restaurants: []}
    };
  },
  created() {
    const auth = getAuth();
    // Listen for authentication state changes
    auth.onAuthStateChanged((user) => {
      this.user = user;
    });
  },
  computed: {
    filteredRestaurants() {
      let filtered = this.restaurants;

      if (this.selectedType) {
        filtered = filtered.filter(restaurant =>
            restaurant.genres.includes(this.selectedType)
        );
      }

      if (this.searchQuery) {
        filtered = filtered.filter(restaurant =>
            restaurant.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      if (this.selectedPriceRange) {
        filtered = filtered.filter(restaurant =>
          restaurant.price_range == this.selectedPriceRange
        );
      }
      return filtered;
    }
  },
  methods: {
    filterRestaurants() {
      this.filteredRestaurants;
    },
  }
};
</script>
<style scoped>

  
  /* Remove bullet points */
  .list-unstyled {
    list-style-type: none;
    padding: 0;
  }

  /* Optional: make sure container width is limited so it's not too wide */
  .container {
    max-width: 400px;
  }
</style>
