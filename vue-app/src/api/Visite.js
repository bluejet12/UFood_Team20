import axios from 'axios';
import auth from '@/api/auth'; // Assurez-vous que `getToken` est accessible.
const token = auth.getToken();
console.log("Token récupéré :", token);  // Vérification du token


const BASE_URL = 'https://ufoodapi.herokuapp.com';

export const VisiteService = {
    async ajouterVisite(userId, restaurantId, date, cote, commentaire) {
        const token = auth.getToken(); // Utilisation de getToken pour récupérer le token
        if (!token) {
            console.error('No token found');
            console.warn('Please login');
            return;
        }

        try {
            const response = await axios.post(
                `${BASE_URL}/users/${userId}/restaurants/visits`,
                {
                    restaurant_id: restaurantId,
                    date,
                    rating: cote,
                    comment: commentaire,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`, // Ajoute le token dans les headers
                    },
                }
            );
            return response.data;
        } catch (error) {
            console.error("Erreur lors de l'ajout de la visite :", error);
            throw error;
        }
    },

    async obtenirVisites(userId) {
        const token = auth.getToken(); // Utilisation de getToken pour récupérer le token
        if (!token) {
            console.error('No token found');
            console.warn('Please login');
            return;
        }

        try {
            const response = await axios.get(
                `${BASE_URL}/users/${userId}/restaurants/visits`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`, // Ajoute le token dans les headers
                    },
                }
            );
            return response.data;
        } catch (error) {
            console.error("Erreur lors de la récupération des visites :", error);
            throw error;
        }
    },
};

export default VisiteService;
