<template>
  <div class="modal-visite-readonly">
    <div class="modal-visite-inner">
      <h2>Détails de votre visite à {{ nomRestaurant }}</h2>
      <div class="mb-3">
        <label class="form-label">Date de visite :</label>
        <p>{{ visiteDetails.date }}</p>
      </div>
      <div class="mb-3">
        <label class="form-label">Évaluation :</label>
        <p>{{ visiteDetails.rating }} / 5</p>
      </div>
      <div class="mb-3">
        <label class="form-label">Commentaire :</label>
        <p>{{ visiteDetails.comment || 'Aucun commentaire' }}</p>
      </div>
      <div class="mb-3 d-flex justify-content-end">
        <button type="button" class="btn btn-secondary" @click="$emit('fermer')">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script>
import VisiteService from '@/api/visite'; // Assurez-vous que le chemin est correct
const utilisateurId = '6569767db55a58e85c543213';

export default {
  props: {
    restaurantId: {
      type: String,
      required: true
    },
    nomRestaurant: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      visiteDetails: {
        date: '',
        rating: '',
        comment: ''
      }
    };
  },

  created() {
    this.chargerDetailsVisite();
  },

  methods: {
    async chargerDetailsVisite() {
      try {
        // Récupération des visites pour l'utilisateur et filtrage par restaurantId
        const visites = await VisiteService.obtenirVisites(utilisateurId);
        const visite = visites.find(v => v.restaurant_id === this.restaurantId);

        if (visite) {
          this.visiteDetails = {
            date: visite.date,
            rating: visite.rating,
            comment: visite.comment
          };
        } else {
          console.error('Visite non trouvée pour ce restaurant');
        }
      } catch (error) {
        console.error('Erreur lors du chargement des détails de la visite :', error);
      }
    }
  }
};
</script>

<style scoped>
.modal-visite-readonly {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-visite-inner {
  background: #FFF;
  padding: 32px;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
}

.form-label {
  font-weight: bold;
  color: black;
}

p {
  margin: 0;
  padding: 8px 0;
  color: #333;
}
</style>
