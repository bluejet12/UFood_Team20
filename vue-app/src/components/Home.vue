<template>
  <div class="home-page d-flex mt-5">
    <div class="container">
      <div class="input-group mb-3">
        <input
            type="text"
            v-model="searchQuery"
            class="form-control"
            style="width: 160px;"
            placeholder="Search for a restaurant"
            @input="filterRestaurants"
        />
        <select class="form-select ml-1" v-model="selectedType" @change="filterRestaurants">
          <option value="">All</option>
          <option v-for="genre in genreOptions" :key="genre" :value="genre">{{ genre }}</option>
        </select>
        <select class="form-select ml-1" v-model="selectedPriceRange" @change="filterRestaurants" style="width: 50px;">
          <option value="">All Prices</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button class="btn btn-sm btn-primary ml-1" @click="switchMode()">
          Mode carte
        </button>
      </div>

      <!-- Filtered Restaurants List -->
      <ul class="list-group list-unstyled" v-if="!mapMode">
        <li
            class="list-group-item"
            v-for="restaurant in filteredRestaurants"
            :key="restaurant.id"
        >
          <router-link :to="'/restaurant/' + restaurant.id"
                       @click.prevent="navigateToRestaurant(restaurant)">
            <strong>{{ restaurant.name }}</strong> -
            {{ restaurant.genres && restaurant.genres.length ? restaurant.genres.join(', ') : 'No genres available' }} -
            {{ '$'.repeat(restaurant.price_range) }} -
            {{ restaurant.rating.toFixed(1) }}
          </router-link>
          <button @click="ouvrirModalVisite(restaurant)" class="btn btn-sm btn-primary ml-3">
            Marquer comme visité
          </button>
        </li>
      </ul>
      <div style="height: 300px" v-if="mapMode">
        <l-map ref="map" v-model:zoom="zoom" :center="position">
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base" name="OpenStreetMap"></l-tile-layer>
          <l-marker v-for="restaurant in filteredRestaurants" :key="restaurant.id"
                    :lat-lng="[restaurant.location.coordinates[1], restaurant.location.coordinates[0]]">
            <l-popup>
              <router-link :to="'/restaurant/' + restaurant.id"
                           @click.prevent="navigateToRestaurant(restaurant)">
                <strong>{{ restaurant.name }}</strong> <br>
                {{ restaurant.genres && restaurant.genres.length ? restaurant.genres.join(', ') : 'No genres available' }}<br>
                {{ '$'.repeat(restaurant.price_range) }}<br>
                {{ restaurant.rating.toFixed(1) }}<br>
                {{ distances.get(restaurant.id).toFixed(1) }} km

              </router-link>
            </l-popup>
          </l-marker>
        </l-map>
      </div>

      <!-- Message de succès -->
      <p v-if="messageDeSucces" class="alert alert-success mt-3">{{ messageDeSucces }}</p>

      <!-- Visit Modal -->
      <ModalVisite
          v-if="showModalVisite && selectedRestaurantId"
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
//import restaurants from "../data/restaurant_list.json";
import { auth } from '../../firebaseConfig';
import ModalVisite from '@/components/ModalVisite.vue';
import restaurantApi from '@/api/restaurant';
import "leaflet/dist/leaflet.css"
import {LMap, LTileLayer, LMarker, LPopup} from "@vue-leaflet/vue-leaflet";

export default {
  name: "HomePageComponent",
  data() {
    return {
      searchQuery: '',
      selectedType: '',
      selectedPriceRange: '',
      restaurants: [{
        "opening_hours":{},
        "pictures":[""],
        "name":"",
        "place_id":"",
        "tel":"",
        "address":"",
        "price_range":0,
        "rating": 0.0,
        "genres":[""],
        "location":{
          "coordinates": [0, 0],
          "type": "Point"
        },
        "id": ""
      },],
      showModalVisite: false,
      selectedRestaurantId: null,
      selectedRestaurantName: '',
      messageDeSucces: '', // Pour stocker le message de succès
      userId: null,
      mapMode: false,
      zoom: 10,
      position: [46.77880, -71.27474],//TODO .coords.latlon
      distances: new Map(),
      map: LMap
    };
  },
  computed: {
    genreOptions() {
      const genreSet = new Set();

      // Extract genres from restaurants and map to user-friendly names
      this.restaurants.forEach((restaurant) => {
        restaurant.genres.forEach((genre) => {
          switch (genre) {
            case "fast-food":
              genreSet.add("Fast Food");
              break;
            case "libanais":
              genreSet.add("Libanais");
              break;
            case "hamburgers":
              genreSet.add("Hamburgers");
              break;
            case "ambiance":
              genreSet.add("Ambiance");
              break;
            case "café":
              genreSet.add("Café");
              break;
            case "asiatique":
              genreSet.add("Asiatique");
              break;
            case "bistro":
              genreSet.add("Bistro");
              break;
            case "italien":
              genreSet.add("Italien");
              break;
          }
        });
      });

      // Convert Set to Array for the template
      return Array.from(genreSet);
    },
    filteredRestaurants() {
      let filtered = this.restaurants;
      
      if (this.selectedType) {
        filtered = filtered.filter(restaurant =>
          restaurant.genres.some(genre => genre.toLowerCase() === this.selectedType.toLowerCase())
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
    navigateToRestaurant(restaurant) {
      const user = auth.currentUser;
      if (user) {
        this.$router.push(`/restaurant/${restaurant.id}`);
        this.searchQuery = '';
      }
    },
    ouvrirModalVisite(restaurant) {
      this.selectedRestaurantId = restaurant.id;
      this.selectedRestaurantName = restaurant.name;
      this.showModalVisite = true;
    },
    fermerModalVisite() {
      this.showModalVisite = false;
    },
    async fetchRestaurants() {
      try {
        const response = await restaurantApi.getRestaurants();
        this.restaurants = response.items || [];
        this.restaurants.forEach(restaurant => {
          this.distances.set(restaurant.id, Math.acos(Math.sin((3.14159/180)*(90-this.position[0]))*
              Math.sin((3.14159/180)*(90-restaurant.location.coordinates[1]))*
              Math.cos((3.14159/180)*Math.abs(this.position[1] - restaurant.location.coordinates[0])) +
              Math.cos((3.14159/180)*(90-this.position[0]))*Math.cos((3.14159/180)*
                  (90-restaurant.location.coordinates[1])))* (180/3.14159)*60*1.852);
        });
        // eslint-disable-next-line no-inner-declarations
        function success(position) {
          this.position = position.coords;
          this.restaurants.forEach(restaurant => {
            this.distances.set(restaurant.id, Math.acos(Math.sin((3.14159/180)*(90-this.position[0]))*
                Math.sin((3.14159/180)*(90-restaurant.location.coordinates[1]))*
                Math.cos((3.14159/180)*Math.abs(this.position[1] - restaurant.location.coordinates[0])) +
                Math.cos((3.14159/180)*(90-this.position[0]))*Math.cos((3.14159/180)*
                    (90-restaurant.location.coordinates[1])))* (180/3.14159)*60*1.852);
          });
        }
        navigator.geolocation.getCurrentPosition(success);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    },
    afficherMessageSucces(message) {
      console.log("Message de succès reçu :", message); // Ajout du log
      this.messageDeSucces = message; // Mettre à jour le message de succès
      this.fermerModalVisite(); // Fermer la modale
      setTimeout(() => {
        this.messageDeSucces = ''; // Effacer le message après 3 secondes
      }, 3000);
    },
    switchMode() {
      this.mapMode = !this.mapMode;
    }
  },
  components: {
    LPopup,
    ModalVisite,
    LMap,
    LTileLayer,
    LMarker
  },
  mounted() {
    this.fetchRestaurants();
  }
};
</script>

<style scoped>
.list-unstyled {
  list-style-type: none;
  padding: 0;
}

.container {
  max-width: 600px;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}
</style>
