import Cookies from "js-cookie";

//import { getAuthToken } from '../utils/auth';
const ENDPOINT = 'https://ufoodapi.herokuapp.com/unsecure';

const ENPOINTSECURE = 'https://ufoodapi.herokuapp.com'

const getListUser =  async function(limit, pages, search) {

    //const token = getAuthToken(); // get token with local storage
    /*
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }*/

    //TODO fix query
    const query = new URLSearchParams({
        limit: limit || 10,
        page: pages || 1,
        q: search || ''
    });
    try {
        const response = await fetch(`${ENDPOINT}/users?${query}`, {
            method: 'GET',
            headers: {
       //         'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch restaurants');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching restaurants:', error);
    }

};

const getUserById = async function(userId) {
    
    //const token = getAuthToken(); // get token with local storage
    /*
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }
*/

    try {
        const response = await fetch(`${ENDPOINT}/users/${userId}`, {
            method: 'GET',
            headers: {
  //              'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch restaurants');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching restaurants:', error);
    }

};

const getUserFavorites = async function(id, limit, pages) {
    /*
    const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }
*/


    const query = new URLSearchParams({
        limit: limit || 10,
        page: pages || 1
    });


    try {
        const response = await fetch(`${ENDPOINT}/users/${id}/favorites?${query}`, {
            method: 'GET',
            headers: {
  //              'Authorization': `Bearer ${token}`,
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

const postFollowUser = async function(id) {
    const token = Cookies.get("token");
    /*
    const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }
    */
    await fetch(`${ENPOINTSECURE}/follow`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
           'Authorization': token,
        },
        body: JSON.stringify({
            id: id,
        }),
    })
    .then((response) => {
        return response.json();
    })
    .catch((error) => {
        console.error('an error have occurred:', error);
    });
};


const postUnfollowUser = async function(id) {
    //const token = getAuthToken(); // get token with local storage
    const token = Cookies.get("token");
    /*
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }
        */
    await fetch(`${ENPOINTSECURE}/unfollow/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        },
        body: JSON.stringify({
            id: id,
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
    getListUser,
    getUserById,
    getUserFavorites,
    postFollowUser,
    postUnfollowUser,
};
