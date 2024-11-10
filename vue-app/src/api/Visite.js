// src/api/visite.js

import axios from 'axios';

const BASE_URL = 'https://ufoodapi.herokuapp.com/unsecure';

export const VisiteService = {
    /**
     * Envoie les détails d'une visite pour un restaurant spécifique.
     * @param {string} userId - L'identifiant de l'utilisateur.
     * @param {string} restaurantId - L'identifiant du restaurant.
     * @param {string} date - La date de la visite (format: "AAAA-MM-JJ").
     * @param {number} cote - La note donnée au restaurant (1-5).
     * @param {string} commentaire - Le commentaire de l'utilisateur.
     * @returns {Promise} - Une promesse résolvant la réponse de l'API.
     */
    async ajouterVisite(userId, restaurantId, date, cote, commentaire) {
        userId = '61916127f8f8790004fd287e';
        try {
            const response = await axios.post(`${BASE_URL}/users/${userId}/restaurants/visits`, {
                restaurant_id: restaurantId,
                date,
                rating: cote,
                comment: commentaire,
            });
            return response.data;
        } catch (error) {
            console.error("Erreur lors de l'ajout de la visite :", error);
            throw error;
        }
    },

    /**
     * Récupère toutes les visites pour un utilisateur donné.
     * @param {string} userId - L'identifiant de l'utilisateur.
     * @returns {Promise} - Une promesse résolvant les données des visites de l'utilisateur.
     */
    async obtenirVisites(userId) {
        userId = '61916127f8f8790004fd287e';
            try {
                const response = await fetch(`${BASE_URL}/users/${userId}/restaurants/visits`, {
                    method: 'GET',
                    headers: {
                        //'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

            if (!response.ok) {
                throw new Error('Failed to fetch restaurants');
            }


            const data = await response.json();

            // Directly return the data object, which contains the restaurant name
            return data.items;  // Return the full response object
        } catch (error) {
            console.error('Error fetching restaurants:', error);
        }
    }
};
