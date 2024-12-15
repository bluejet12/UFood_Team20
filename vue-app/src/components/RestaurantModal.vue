<template>
  <div v-if="show && restaurant" class="modal fade show" tabindex="-1" role="dialog" aria-labelledby="restaurantModalLabel" aria-hidden="true" style="display: block;">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="restaurantModalLabel">{{ restaurant.name || 'Restaurant' }}</h5>
          <button type="button" class="close" @click="closeModal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div v-if="restaurant">
            <p><strong>Address:</strong> {{ restaurant.address || 'N/A' }}</p>
            <p><strong>Phone:</strong> {{ restaurant.tel || 'N/A' }}</p>
            <p><strong>Price Range:</strong> {{ getPriceRange(restaurant.price_range) }}</p>
            <p><strong>Rating:</strong> {{(Math.round(restaurant.rating * 100) / 100).toFixed(2) || 'N/A' }} / 5</p>

            <p><strong>Opening Hours:</strong></p>
            <ul>
              <li v-for="(hours, day) in restaurant.opening_hours" :key="day">
                <strong>{{ day }}:</strong> {{ hours || 'Closed' }}
              </li>
            </ul>

            <p><strong>Genres:</strong> {{ restaurant.genres && restaurant.genres.length > 0 ? restaurant.genres.join(', ') : 'N/A' }}</p>

            <p><strong>Images:</strong></p>
            <div class="gallery">
              <img v-for="(image, index) in restaurant.pictures" :key="index" :src="image" alt="restaurant image" class="img-fluid modal-img" />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantModal',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    restaurant: {
      type: Object,
      default: () => ({})  // Default to an empty object to prevent errors
    }
  },
  methods: {
    closeModal() {
      this.$emit('update:show', false);  // Emit the event to close the modal
    },
    getPriceRange(range) {
      const priceRanges = ['$', '$$', '$$$', '$$$$'];
      return priceRanges[range - 1] || 'N/A';  // Default to 'N/A' if invalid range
    }
  }
};
</script>

<style scoped>
/* Modal Styles */
.modal-dialog {
  max-width: 1000px;
  max-height: 1000px;
  margin: 1.75rem auto;
}

.modal-header {
  background-color: #90CAF9; /* Soft blue color */
  color: white;
}

.modal-title {
  font-weight: bold;
}

.close {
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Modal Body */
.modal-body {
  max-height: 10000vh; /* Fixed maximum height for stable layout */
  overflow-y: auto; /* Scroll within the modal body */
  padding-right: 15px; /* Adjusts padding to prevent scrollbar overlap */
}

/* Image Gallery */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive grid */
  gap: 15px;
  justify-content: center;
}

.modal-img {
  width: 100%;
  height: 200px; /* Fixed height for stability */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  object-fit: cover; /* Ensures image fills the container */
  transition: box-shadow 0.3s ease; /* Shadow effect only */
}

/* Subtle Highlight on Hover Without Scaling */
.modal-img:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Emphasize shadow on hover */
}

/* Body Text */
.modal-body p {
  margin: 15px 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  margin: 5px 0;
  font-size: 1rem;
}

/* Footer Styles */
.modal-footer {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e0e0e0;
  padding: 10px 15px;
}

.btn-secondary {
  background-color: #f44336; /* Red button color */
  color: #fff;
}

.btn-secondary:hover {
  background-color: #d32f2f;
}

@media (max-width: 767px) {
  .modal-dialog {
    max-width: 100%;
    margin: 1rem;
  }
}



</style>
