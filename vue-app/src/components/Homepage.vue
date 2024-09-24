<template>
    <div class="home-page">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search for a restaurant"
        @input="filterRestaurants"
      />
  
      <select v-model="selectedFilter" @change="filterRestaurants">
        <option value="">All</option>
        <option value="Fast Food">Fast Food</option>
        <option value="Vegan">Vegan</option>
        <option value="Dessert">Dessert</option>
      </select>
  
      <ul>
        <li v-for="restaurant in filteredRestaurants" :key="restaurant.id">
          <strong>{{ restaurant.name }}</strong> - 
          {{ restaurant.genres.join(', ') }} - 
          {{ restaurant.priceRange }} - 
          {{ restaurant.averageRating }}
        </li>
      </ul>
    </div>
  </template>

<script>
import restaurants from "../data/restaurant_list.json";
export default {
    name: "HomePageComponent",
    data() {
    return {
      searchQuery: '',
      selectedFilter: '',
      restaurants: restaurants || { restaurants: [] }
    };
  },
  computed: {
    filteredRestaurants() {
      let filtered = this.restaurants;

      if (this.selectedFilter) {
        filtered = filtered.filter(restaurant => 
          restaurant.genres.includes(this.selectedFilter)
        );
      }

      if (this.searchQuery) {
        filtered = filtered.filter(restaurant =>
          restaurant.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      return filtered;
    }
  },
  methods: {
    filterRestaurants() {
        this.filteredRestaurants;
    }
  }
};
</script>

<style scoped>
</style>