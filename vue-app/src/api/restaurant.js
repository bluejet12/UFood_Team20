import { getAuthToken } from '../utils/auth';

const ENDPOINT = 'https://ufoodapi.herokuapp.com';

const getRestaurants = async function(limit, page)  {
    const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }

    //TODO fix query
    const query = new URLSearchParams({

        limit: limit || 10,
        page: page || 1
    });

    try {
        const response = await fetch(`${ENDPOINT}/restaurants?${query}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch restaurants');
        }

        const data = await response.json();
        return data.restaurants;
    } catch (error) {
        console.error('Error fetching restaurants:', error);
    }
};

const getRestaurantById = async function(id){
    const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }

    try {
        const response = await fetch(`${ENDPOINT}/restaurants/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch restaurants');
        }

        const data = await response.json();
        return data.restaurants;
    } catch (error) {
        console.error('Error fetching restaurants:', error);
    }
};
const getRestaurantsVisitsById = async function(id){
    const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }


    //TODO fix query
    const query = new URLSearchParams({
            limit: 10,
            page: 1
    });

    try {
        const response = await fetch(`${ENDPOINT}/restaurants/${id}/visits${query}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch restaurants');
        }

        const data = await response.json();
        return data.visits;
    } catch (error) {
        console.error('Error fetching restaurants:', error);
    }
};
            


export default {
    getRestaurants,
    getRestaurantById,
    getRestaurantsVisitsById
};
