<template>
  <div class="restaurant-page">
    <div class="container">
      <h1>{{ restaurant.name }}</h1>
      <p><strong>Genres :</strong> {{ restaurant.genres.join(', ') }}</p>
      <p><strong>Fourchette de prix :</strong> {{ restaurant.priceRange }}</p>
      <p><strong>Cote moyenne :</strong> {{ restaurant.averageRating }}</p>
      <p><strong>Latitude :</strong> {{ restaurant.location.latitude }}</p>
      <p><strong>Longitude :</strong> {{ restaurant.location.longitude }}</p>
    </div>
  </div>
</template>

<script>
import restaurants from '../data/restaurant_list.json';

export default {
  props: ['id'],
  data() {
    return {
      restaurant: {},
    };
  },
  created() {
    this.fetchRestaurantDetails(this.id);
  },
  methods: {
    fetchRestaurantDetails(id) {

      const restaurant = restaurants.find(r => r.id === parseInt(id));
      if (restaurant) {
        this.restaurant = restaurant;
      } else {
        console.error('Restaurant non trouvé');
      }
    }
  }
};
</script>

<style scoped>
.restaurant-page {
  margin: 40px 0;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
}

.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

p {
  font-size: 1.1rem;
  margin-bottom: 10px;
}
</style>
