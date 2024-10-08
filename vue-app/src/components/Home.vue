<template>
  <div class="home-page d-flex mt-5">
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
        >
          <router-link :to="'/restaurant/' + restaurant.id"
          @click.prevent="navigateToRestaurant(restaurant)">
            <strong>{{ restaurant.name }}</strong> -
            {{ restaurant.genres.join(', ') }} -
            {{ '$'.repeat(restaurant.price_range) }} -
            {{ restaurant.rating }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import restaurants from "../data/restaurant_list.json";
import { auth} from '../../firebaseConfig';

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
    async navigateToRestaurant(restaurant) {
      const user = auth.currentUser;

      //Check if user is logged in
      if (user) {
        const userKey = `visitCount-${user.uid}-${restaurant.id}`;
        const timestampKey = `visitTimestamp-${user.uid}-${restaurant.id}`;
        // Retrieve the visit count 
        let visitCount = parseInt(localStorage.getItem(userKey)) || 0;
        
        // Increment the visit count
        visitCount += 1;
        
        // Save the visit count of the user
        localStorage.setItem(userKey, visitCount);
        
        localStorage.setItem(timestampKey, Date.now());//check the time of the visit
        
        this.$router.push(`/restaurant/${restaurant.id}`);
        
        // Clear the search query
        this.searchQuery = '';
      } 
    }
  }
};
</script>

<style scoped>
.list-unstyled {
  list-style-type: none;
  padding: 0;
}

.container {
  max-width: 400px;
}
</style>
