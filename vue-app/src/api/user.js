import { getAuthToken } from '../utils/auth';
const ENDPOINT = 'https://ufoodapi.herokuapp.com';


const getListUser =  async function(limit, pages, search) {

    const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }

    //TODO fix query
    const query = new URLSearchParams({
        limit: limit || 10,
        page: pages || 1,
        q: search || ''
    });
    try {
        const response = await fetch(`${ENDPOINT}/user?${query}`, {
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

const getUserById = async function() {
    
    const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }

    const userId = localStorage.getItem('userId');
    if (!userId) {
        console.error('No user id found');
        console.warn('Please login');
    }

    try {
        const response = await fetch(`${ENDPOINT}/user/:${userId}`, {
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

const getUserFavorites = async function(limit, pages) {
    const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }

    const userId = localStorage.getItem('userId');
    if (!userId) {
        console.error('No user id found');
        console.warn('Please login');
    }

    //TODO fix query
    const query = new URLSearchParams({
        limit: limit || 10,
        page: pages || 1
    });


    try {
        const response = await fetch(`${ENDPOINT}/user/:${userId}/favorites?${query}`, {
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

const postFollowUser = async function(id) {
    const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }
    await fetch(`${ENDPOINT}/user/:${id}/follow`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
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
    const token = getAuthToken(); // get token with local storage
    if (!token) {
        console.error('No token found');
        console.warn('Please login');
        return;
    }
    await fetch(`${ENDPOINT}/user/:${id}/unfollow`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
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
