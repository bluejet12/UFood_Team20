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
      <p><strong>Location:</strong> Latitude {{ restaurant.location.coordinates[1] }},
        Longitude {{ restaurant.location.coordinates[0] }}</p>
      <div v-if="restaurant.pictures && restaurant.pictures.length">
        <h3>Pictures</h3>
        <ul>
          <li v-for="(picture, index) in restaurant.pictures" :key="index">
            <img :src="picture" :alt="'Picture ' + (index + 1)" />
          </li>
        </ul>
      </div>
      <div style="height: 300px">
        <l-map ref="map" v-model:zoom="zoom" :center="[restaurant.location.coordinates[1],
            restaurant.location.coordinates[0]]">
          <l-tile-layer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              layer-type="base"
              name="OpenStreetMap"></l-tile-layer>
          <l-marker :lat-lng="[restaurant.location.coordinates[1], restaurant.location.coordinates[0]]">
            <l-popup>
              {{restaurant.name}} <br>
              {{restaurant.address}}
            </l-popup>
          </l-marker>
        </l-map>
      </div>
      <button @click="getDirections(restaurant)">Directions</button>
      <p v-bind:style="{color: routeColor}">{{route}}</p>
    </div>
  </div>
</template>

<script>
import restaurants from '../data/restaurant_list.json';
import "leaflet/dist/leaflet.css";
import {LMap, LMarker, LPopup, LTileLayer} from "@vue-leaflet/vue-leaflet";

export default {
  components: {LPopup, LMarker, LMap, LTileLayer},
  props: ['id'],
  data() {
    return {
      restaurant: {},
      zoom: 18,
      route: {},
      routeColor: {},
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
        this.routeColor = "black";
        this.route = "";
      } else {
        console.error('Restaurant not found');
      }
    },
    getDirections(restaurant){
      let url;
      function success(position){
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        url = "http://routing.openstreetmap.de/routed-car/route/v1/driving/" + longitude + "," + latitude + ";"
            + restaurant.location.coordinates[0] + "," + restaurant.location.coordinates[1]
            + "?overview=false&steps=true";
        fetch(url).then(function(response) {
          return response.json();
        }).then(function (data) {
          if(data.code === "Ok"){
            let routeData = data.routes[0];
            //this.route = "Distance: " + (Math.round(routeData.distance/100)/10) + " km<br><br>";
            console.log("Distance: " + (Math.round(routeData.distance/100)/10) + " km");
            //this.route += "DIRECTIONS:<br>";
            for (let i in routeData.legs[0].steps) {
              let step = routeData.legs[0].steps[i];
              console.log(step);
              let distance;
              let name = "";
              let ref1 = "";

              if(step.distance > 1000){
                distance = (Math.round(step.distance/100)/10) + " km";
              }
              else distance = Math.round(step.distance) + " m";

              if(typeof step.ref == "string" && step.ref.search(";") === -1){
                ref1 = step.ref;
              }
              else if(typeof step.ref == "string" && step.ref.search(";") !== -1){
                ref1 = step.ref.substring(0, step.ref.search(";"));
              }

              if(step.name !== "" && ref1 !== ""){
                name = " onto " + step.name + "(" + ref1 + ")";
              }
              else if(step.name !== "" && ref1 === ""){
                name = " onto " + step.name;
              }
              else if(step.name === "" && ref1 !== ""){
                name = " onto " + ref1;
              }

              if(step.maneuver.type === "depart"){
                //this.route += "Depart " + step.maneuver.modifier.toUpperCase() + name + " " + distance
                // + " away<br><br>";
                console.log("Depart " + step.maneuver.modifier.toUpperCase() + name + " " + distance + " away");
              }
              else if(step.maneuver.type === "turn" || step.maneuver.type === "end of road"){
                //this.route += "Continue " + distance + " then turn " + step.maneuver.modifier.toUpperCase() + name
                // + "<br><br>";
                console.log("Continue " + distance + " then turn " + step.maneuver.modifier.toUpperCase() + name);
              }
              else if(step.maneuver.type === "new name"){
                //this.route += "Continue " + distance + " then keep going " + step.maneuver.modifier.toUpperCase()
                // + name + "<br><br>";
                console.log("Continue " + distance + " then keep going " + step.maneuver.modifier.toUpperCase() + name);
              }
              else if(step.maneuver.type === "on ramp" || step.maneuver.type === "off ramp"){
                //this.route += "Continue " + distance + " then take the " + step.maneuver.type + " "
                // + step.maneuver.modifier.toUpperCase() + name + "<br><br>";
                console.log("Continue " + distance + " then take the " + step.maneuver.type + " "
                    + step.maneuver.modifier.toUpperCase() + name);
              }
              else if(step.maneuver.type === "merge"){
                //this.route += "Continue " + distance + " then merge " + step.maneuver.modifier.toUpperCase() + name
                // + "<br><br>";
                console.log("Continue " + distance + " then merge " + step.maneuver.modifier.toUpperCase() + name);
              }
              else if(step.maneuver.type === "fork"){
                //this.route += "Continue " + distance + " then go " + step.maneuver.modifier.toUpperCase()
                // + " through the fork" + name + "<br><br>";
                console.log("Continue " + distance + " then go " + step.maneuver.modifier.toUpperCase()
                    + " through the fork" + name);
              }
              else if(step.maneuver.type === "arrive"){
                let tempstr = "You have arrived at your destination";
                console.log(typeof step.maneuver.modifier !== "undefined");
                if(typeof step.maneuver.modifier !== "undefined"){
                  tempstr += " on your " + step.maneuver.modifier.toUpperCase();
                }
                //this.route += tempstr;
                console.log(tempstr);
              }
            }
          }
          else if(data.code === "NoRoute"){
            this.route = "No route was found."
            this.routeColor = "red";
          }
        }).catch(function(error) {
          console.log(error);
        });
      }
      navigator.geolocation.getCurrentPosition(success);
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
