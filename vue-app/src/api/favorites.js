import { getAuthToken } from '../utils/auth';

const ENDPOINT = 'https://ufoodapi.herokuapp.com';


const getFavorites = async function(limit, page)  {

    const token = getAuthToken(); // get token with local storage
    
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }

    //TODO fix query
    const query = new URLSearchParams({

        limit: limit || 10,
        page: page || 0
    });

    await fetch(`${ENDPOINT}/favorites?${query}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
    .then((response) => {
        return response.json();
    })
    .catch((error) => {
        console.error('an error have occurred:', error);
    });
};

const getFavoriteById = async function(id){
    const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }

    await fetch(`${ENDPOINT}/favorites/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
    .then((response) => {
        return response.json();
    })
    .catch((error) => {
        console.error('an error have occurred:', error);
    });   
};

const postFavorite = async function(name, owner){
    const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }


    await fetch(`${ENDPOINT}/favorites`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            name: name,
            owner: owner,
        }),
    })
    .then((response) => {
        return response.json();
    })
    .catch((error) => {
        console.error('an error have occurred:', error);
    }); 

};

const putFavoriteById = async function(id, name, owner){
    const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }
    
    
    await fetch(`${ENDPOINT}/favorites/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            name: name,
            owner: owner,
        }),
    })
    .then((response) => {
        return response.json();
    })
    .catch((error) => {
        console.error('an error have occurred:', error);
    }); 

};

const deleteFavoriteById = async function(id){
    const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }

    await fetch(`${ENDPOINT}/favorites/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
    .then((response) => {
        return response.json();
    })
    .catch((error) => {
        console.error('an error have occurred:', error);
    }); 

};

const deleteFavoriteRestaurant = async function(id, restaurantId){
    const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }

    await fetch(`${ENDPOINT}/favorites/:${id}/restaurauts/:${restaurantId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
    .then((response) => {
        return response.json();
    })
    .catch((error) => {
        console.error('an error have occurred:', error);
    }); 
};

const postFavoriteRestaurant = async function(id, restaurantId){
    const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }

    await fetch(`${ENDPOINT}/favorites/:${id}/restaurauts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            id: restaurantId,
        }),
    })
    .then((response) => {
        return response.json();
    })
    .catch((error) => {
        console.error('an error have occurred:', error);
    }); 
};

export default {
    getFavorites,
    getFavoriteById,
    postFavorite,
    putFavoriteById,
    deleteFavoriteById,
    deleteFavoriteRestaurant,
    postFavoriteRestaurant
};
    