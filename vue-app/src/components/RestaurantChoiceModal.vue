<template>
  <div v-if="show" class="modal fade show d-block" tabindex="-1" aria-labelledby="restaurantModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="restaurantModalLabel">Select Restaurants to Add</h5>
          <button type="button" class="close" @click="closeModal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <ul class="list-group">
            <li v-for="restaurant in allRestaurants" :key="restaurant.id" class="list-group-item">
              <input
                  type="checkbox"
                  :id="'restaurant-' + restaurant.id"
                  v-model="selectedRestaurants"
                  :value="restaurant.id"
              />
              <label :for="'restaurant-' + restaurant.id">{{ restaurant.name }}</label>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">
            Close
          </button>
          <button
              type="button"
              class="btn btn-primary"
              @click="addRestaurants"
              :disabled="selectedRestaurants.length === 0"
          >
            Add Selected Restaurants
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: { type: Boolean, required: true },          // Controls the modal visibility
    allRestaurants: { type: Array, required: true },  // List of all restaurants to display
  },
  data() {
    return {
      selectedRestaurants: []  // Stores selected restaurant IDs
    };
  },
  methods: {
    // Close the modal
    closeModal() {
      this.$emit('update:show', false);  // Emit an event to hide the modal in the parent
    },
    // Add selected restaurants
    addRestaurants() {
      this.$emit('add-restaurants', this.selectedRestaurants);  // Emit selected restaurants to the parent
      this.closeModal();  // Close the modal
    },
  },
};
</script>

<style scoped>
.modal-dialog {
  max-width: 600px;
}
</style>
