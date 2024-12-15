import Cookies from 'js-cookie';


const ENDPOINT = "https://ufoodapi.herokuapp.com";


const login = async function (email, password) {
    try {
        const response = await fetch(`${ENDPOINT}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                email: email,
                password: password,
            }),
        });

        if (!response.ok) {
            throw new Error(`Login failed: ${response.statusText}`);
        }

        const data = await response.json();

        // Store token and userId in cookies
        Cookies.set('token', data.token, { expires: 1 }); // Expires in 1 day
        Cookies.set('userId', data.id, { expires: 1 });

        console.log("Login successful:", data);
        return data.id;
    } catch (error) {
        console.error('An error occurred during login:', error);
        throw error; // Re-throw for the caller to handle
    }
};

const logout = async function () {
    try {
        const token = Cookies.get('token'); // Get the token from the cookie

        const response = await fetch(`${ENDPOINT}/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Include token in the Authorization header
            },
        });

        if (!response.ok) {
            throw new Error(`Logout failed: ${response.statusText}`);
        }

        // Clear the cookies
        Cookies.remove('token');
        Cookies.remove('userId');

        console.log("Logout successful");
    } catch (error) {
        console.error('An error occurred during logout:', error);
        throw error; // Re-throw for the caller to handle
    }
};

const getTokenInfo = async function () {
    try {
        const token = Cookies.get('token'); // Get the token from the cookie
        if (!token) {
            throw new Error('No token found');
        }

        const response = await fetch(`${ENDPOINT}/tokenInfo`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`, // Use the token for authentication
            },
        });

        if (!response.ok) {
            if (response.status === 401) {
                // Token expired or invalid
                Cookies.remove('token');
                Cookies.remove('userId');
                throw new Error('Token expired. Please log in again.');
            }
            throw new Error(`Failed to fetch token info: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Token info fetched successfully:", data);
        return data; // Return user info
    } catch (error) {
        console.error("An error occurred while fetching token info:", error.message);
        throw error; // Re-throw for the caller to handle
    }
};


const signup = async (name, email, password) => {
    try {
        const response = await fetch(`${ENDPOINT}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                name,
                email,
                password,
            }).toString(),
        });

        if (!response.ok) {
            console.error(`Error: ${response.status} - ${response.statusText}`);
            const errorDetails = await response.text();
            console.error('Error details:', errorDetails);
            throw new Error(errorDetails);
        }

        const result = await response.json();
        console.log('Signup successful:', result);
        return result; // Contains the created user's info
    } catch (error) {
        console.error('An error occurred during signup:', error);
        throw error; // Re-throw for the caller to handle
    }
};



const getUserId = function () {
    return Cookies.get('userId');
};

// Helper to get the token from the cookie
const getToken = function () {
    return Cookies.get('token');
};
export default {
    login,
    logout,
    signup,
    getTokenInfo,
    getUserId,
    getToken,
};
