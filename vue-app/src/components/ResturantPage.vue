<template>
  <div class="restaurant-page">
    <div class="container">
      <h1>{{ restaurant.name }}</h1>
      <p><strong>Address:</strong> {{ restaurant.address }}</p>
      <p><strong>Telephone:</strong> {{ restaurant.tel }}</p>
      <p><strong>Genres:</strong> {{ restaurant.genres.join(', ') }}</p>
      <p><strong>Price Range:</strong> {{ '$'.repeat(restaurant.price_range) }}</p>
      <p><strong>Rating:</strong> {{ restaurant.rating }}</p>
      <p><strong>Opening Hours:</strong></p>
      <ul>
        <li v-for="(hours, day) in restaurant.opening_hours" :key="day">
          <strong>{{ day }}:</strong> {{ hours }}
        </li>
      </ul>
      <p><strong>Location:</strong> Latitude {{ restaurant.location.coordinates[1] }}, Longitude {{ restaurant.location.coordinates[0] }}</p>
      <div v-if="restaurant.pictures && restaurant.pictures.length">
        <h3>Pictures</h3>
        <ul>
          <li v-for="(picture, index) in restaurant.pictures" :key="index">
            <img :src="picture" :alt="'Picture ' + (index + 1)" />
          </li>
        </ul>
      </div>
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
    this.fetchRestaurantDetails();
  },
  methods: {
    fetchRestaurantDetails() {
      const restaurant = restaurants.find(r => r.id === this.id);
      if (restaurant) {
        this.restaurant = restaurant;
      } else {
        console.error('Restaurant not found');
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

p, ul {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

img {
  max-width: 200px;
  margin: 10px 0;
}
</style>
