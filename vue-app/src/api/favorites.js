//import { getAuthToken } from '../utils/auth';

const ENDPOINT = 'https://ufoodapi.herokuapp.com';


const getFavorites = async function(limit, page) {
    const query = new URLSearchParams({
        limit: limit || 10,
        page: page || 0
    });

    try {
        const response = await fetch(`${ENDPOINT}/unsecure/favorites?${query}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch favorite lists');
        }

        const data = await response.json();
        return data;  // Return the fetched data

    } catch (error) {
        console.error('An error occurred:', error);
        return null;  // Return null or handle error as needed
    }
};


const getFavoriteById = async function(id){
    /*const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }*/

try {
    const response = await fetch(`${ENDPOINT}/unsecure/favorites/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch favorite lists');
    }

    const data = await response.json();
    return data;  // Return the fetched data

} catch (error) {
    console.error('An error occurred:', error);
    return null;  // Return null or handle error as needed
}
};

const postFavorite = async function(name, owner) {
    //const token = getAuthToken();  // Get token from local storage or your state management

    const headers = {
        'Content-Type': 'application/json',
    };

    // If a token exists, add it to the header for authorization
    /*if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }*/

    const body = JSON.stringify({
        name: name,
        owner: owner,  // Only required if there's no token
    });

    try {
        const response = await fetch(`https://ufoodapi.herokuapp.com/unsecure/favorites`, {
            method: 'POST',
            headers: headers,
            body: body,
        });

        if (!response.ok) {
            throw new Error('Failed to create favorite list');
        }

        const data = await response.json();
        console.log('Favorite list created:', data);
        return data;  // Return the created list data (like ID)
    } catch (error) {
        console.error('Error occurred:', error);
    }
};


const putFavoriteById = async function(id, name, owner){
    /*const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }*/
    
    
    await fetch(`${ENDPOINT}/favorites/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${token}`,
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
    /*const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }*/

    await fetch(`${ENDPOINT}/favorites/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${token}`,
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
    /*const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }*/

    await fetch(`${ENDPOINT}/favorites/:${id}/restaurauts/:${restaurantId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${token}`,
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
    /*const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }*/

    await fetch(`${ENDPOINT}/favorites/:${id}/restaurauts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${token}`,
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
    