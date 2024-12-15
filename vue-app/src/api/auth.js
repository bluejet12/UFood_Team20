

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
        // Stocker le token et l'ID utilisateur dans le localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.id);

        console.log("Login successful:", data);
        return data.id;
    } catch (error) {
        console.error('An error occurred during login:', error);
    }
};

const logout = async function () {
    try {
        const token = localStorage.getItem('token'); // Récupérer le token stocké

        const response = await fetch(`${ENDPOINT}/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token, // Envoyer le token dans l'en-tête
            },
        });

        if (!response.ok) {
            throw new Error(`Logout failed: ${response.statusText}`);
        }

        // Nettoyer le localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('userId');

        console.log("Logout successful");
    } catch (error) {
        console.error('An error occurred during logout:', error);
    }
};

const getTokenInfo = async function(token) {
    try {
        const response = await fetch(`${ENDPOINT}/tokenInfo`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token, // Remplacer directement par le token sans 'Bearer'
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch token info: ${response.statusText}`);
        }

        const data = await response.json(); // Attendre la réponse JSON
        console.log("Token info fetched successfully:", data);
        return data; // Retourner les informations de l'utilisateur
    } catch (error) {
        console.error("An error occurred while fetching token info:", error.message);
        return null; // Retourner null en cas d'erreur
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
    }
};




const getUserId = function() {
    return localStorage.getItem('userId');
}

const getToken = function() {
    return localStorage.getItem('token');
}
export default {
    login,
    logout,
    signup,
    getTokenInfo,
    getUserId,
    getToken,
};
