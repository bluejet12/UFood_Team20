<template>
  <div class="home-page">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">UFood</a>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <button
          class="btn btn-outline-primary ml-2"
          type="button"
          data-toggle="modal"
          data-target="#loginModal"
      >
        <i class="fas fa-sign-in-alt"></i> Log In
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>


    <!-- Search and Filter Section -->
    <div class="container mt-4">
      <div class="input-group mb-3">
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
      </div>


      <!-- Filtered Restaurants List -->
      <ul class="list-group">
        <li v-for="restaurant in filteredRestaurants" :key="restaurant.id">
          <strong>{{ restaurant.name }}</strong> -
          {{ restaurant.genres.join(', ') }} -
          {{ restaurant.priceRange }} -
          {{ restaurant.averageRating }}
        </li>
      </ul>
    </div>
  </div>

  <!-- Login Modal -->
  <div
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="loginModalLabel">Log In</h5>
          <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <!-- Login Form -->
          <form>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-primary">Log In</button>
          </form>

          <!-- Create Account Link -->
          <div class="mt-3">
            <p class="text-center">
              No account? <a href="#" @click.prevent="createAccount">Create an account</a>
            </p>
          </div>
        </div>

        <div class="modal-footer">
          <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
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
      restaurants: restaurants || {restaurants: []}
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