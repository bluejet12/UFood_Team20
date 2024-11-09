<template>
  <div class="modal-visite">
    <div class="modal-visite-inner">
      <h2>Parlez-nous de votre visite à {{ nomRestaurant }}</h2>
      <form @submit.prevent="envoyerVisite">
        <div class="mb-3">
          <label for="dateInput" class="form-label">Date de visite</label>
          <input type="date" class="form-control" id="dateInput" v-model="date" required />
        </div>
        <div class="mb-3">
          <label for="ratingInput" class="form-label">Évaluation (sur 5)</label>
          <input type="number" class="form-control" id="ratingInput" v-model="note" min="1" max="5" required />
        </div>
        <div class="mb-3">
          <label for="commentInput" class="form-label">Commentaire</label>
          <textarea class="form-control" id="commentInput" v-model="commentaire" rows="3"></textarea>
        </div>
        <div class="mb-3 d-flex justify-content-end">
          <button type="submit" class="mx-2 btn btn-primary">Envoyer</button>
          <button type="button" class="btn btn-secondary" @click="$emit('fermer')">Annuler</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import VisiteService from '@/api/Visite';
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
      date: '',
      note: '',
      commentaire: ''
    };
  },

  methods: {
    async envoyerVisite() {
      try {

        await VisiteService.ajouterVisite(utilisateurId, this.restaurantId, this.date, this.note, this.commentaire);
        console.log('Visite envoyée avec succès !');
        this.$emit('fermer'); // Ferme la modale après l'envoi
      } catch (error) {
        console.error('Erreur lors de l\'envoi de la visite :', error);
      }
    }
  }
};
</script>

<style scoped>
.modal-visite {
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
  color: black;
}
</style>
