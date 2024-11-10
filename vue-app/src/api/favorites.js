//import { getAuthToken } from '../utils/auth';

const ENDPOINT = 'https://ufoodapi.herokuapp.com/unsecure';


const getFavorites = async function(limit, page) {
    const query = new URLSearchParams({
        limit: limit || 10,
        page: page || 1
    });

    try {
        const response = await fetch(`${ENDPOINT}/favorites?${query}`, {
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
    // const token = getAuthToken();  // Retrieve token from local storage or state management

    const headers = {
        'Content-Type': 'application/json',
    };

    // If a token exists, add it to the header for authorization
    // Uncomment and use the token if needed
    /*
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    */

    const body = JSON.stringify({
        name: name,
        owner: owner,  // Owner should be a string, adjust accordingly
    });

    try {
        const response = await fetch(`${ENDPOINT}/unsecure/favorites`, {
            method: 'POST',
            headers: headers,
            body: body,
        });

        // Check if the response is okay (status code in the range 200-299)
        if (!response.ok) {
            throw new Error('Failed to create favorite list');
        }

        // Parse and return the response data
        const data = await response.json();
        console.log('Favorite list created:', data);
        return data;  // Return the created list data (e.g., ID of the created favorite list)
    } catch (error) {
        console.error('Error occurred while creating favorite list:', error);
        // Optionally, you could return a value here to indicate failure (e.g., null or error object)
        return null;
    }
};



const putFavoriteById = async function(id, name, owner) {
    try {
        const response = await fetch(`${ENDPOINT}/unsecure/favorites/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // Uncomment if you want to add authentication token
                // 'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: name,
                owner: owner,
            }),
        });

        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`Failed to update favorite list, status: ${response.status}`);
        }

        // Parse the response JSON and return it
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error has occurred:', error);
    }
};


const deleteFavoriteById = async function(id) {
    // const token = getAuthToken(); // Retrieve the token if needed from local storage or your state management

    const headers = {
        'Content-Type': 'application/json',
    };

    // If a token exists, add it to the header for authorization
    // Uncomment and use the token if necessary
    /*
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    */

    try {
        const response = await fetch(`${ENDPOINT}/unsecure/favorites/${id}`, {
            method: 'DELETE',
            headers: headers,
        });

        // Check if the response status is OK (status code in the range 200-299)
        if (!response.ok) {
            throw new Error('Failed to delete the favorite');
        }

        // Parse the JSON response
        const data = await response.json();

        console.log('Favorite deleted:', data);  // Log the response (e.g., confirmation or deleted data)
        return data;  // Return the deleted favorite or confirmation response
    } catch (error) {
        console.error('Error occurred while deleting favorite:', error);  // Log any errors
        return null;  // Return null or appropriate error value
    }
};


const deleteFavoriteRestaurant = async function(id, restaurantId) {
    try {
        // Assuming the ENDPOINT variable is already defined
        const response = await fetch(`${ENDPOINT}/unsecure/favorites/${id}/restaurants/${restaurantId}`, {
            method: 'DELETE', // Change method to DELETE for removal
            headers: {
                'Content-Type': 'application/json',
                // Uncomment and add token if needed:
                // 'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to delete restaurant');
        }

        const data = await response.json();
        console.log('Restaurant removed:', data); // Log the response data

        return data; // Return the data from the response

    } catch (error) {
        console.error('Error removing restaurant:', error);
    }
};


const postFavoriteRestaurant = async function(id, restaurantId) {
    /*const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }*/

    try {
        const response = await fetch(`${ENDPOINT}/unsecure/favorites/${id}/restaurants`, {  // Fixed URL and used template literals
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${token}`,  // Uncomment this if using authorization
            },
            body: JSON.stringify({
                id: restaurantId,  // Pass the restaurantId in the request body
            }),
        });

        // Check if the response is successful (status code 200-299)
        if (response.ok) {
            const data = await response.json();
            console.log('Restaurant added:', data);
            return data;  // Return the data from the response
        } else {
            console.error('Failed to add restaurant. Status:', response.status);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
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
    