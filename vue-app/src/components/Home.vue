<template>
  <div class="home-page d-flex mt-5">
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
          <button @click="ouvrirModalVisite(restaurant)" class="btn btn-sm btn-primary ml-3">
            Marquer comme visité
          </button>
        </li>
      </ul>

      <!-- Message de succès -->
      <p v-if="messageDeSucces" class="alert alert-success mt-3">{{ messageDeSucces }}</p>

      <!-- Visit Modal -->
      <ModalVisite
          v-if="showModalVisite"
          :restaurantId="selectedRestaurantId"
          :nomRestaurant="selectedRestaurantName"
          :userId="userId"
          @fermer="fermerModalVisite"
          @visite-ajoutee="afficherMessageSucces"
      />
    </div>
  </div>
</template>

<script>
import restaurants from "../data/restaurant_list.json";
import ModalVisite from '@/components/ModalVisite.vue';
import auth from "@/api/auth";

export default {
  name: "HomePageComponent",
  data() {
    return {
      searchQuery: '',
      selectedType: '',
      selectedPriceRange: '',
      restaurants: restaurants || {restaurants: []},
      showModalVisite: false,
      selectedRestaurantId: null,
      selectedRestaurantName: '',
      messageDeSucces: '', // Pour stocker le message de succès
      userId: null,
    };
  },
  created() {
    this.fetchUserId();
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

  methods:  {
    async fetchUserId() {
      this.userId = auth.getUserId();
    },
    ouvrirModalVisite(restaurant) {
      this.selectedRestaurantId = restaurant.id;
      this.selectedRestaurantName = restaurant.name;
      this.showModalVisite = true;
    },
    fermerModalVisite() {
      this.showModalVisite = false;
    },
    afficherMessageSucces(message) {
      console.log("Message de succès reçu :", message); // Ajout du log
      this.messageDeSucces = message; // Mettre à jour le message de succès
      this.fermerModalVisite(); // Fermer la modale
      setTimeout(() => {
        this.messageDeSucces = ''; // Effacer le message après 3 secondes
      }, 3000);
    }
  },
  components: {
    ModalVisite
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

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}
</style>
