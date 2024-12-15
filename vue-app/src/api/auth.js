import Cookies from "js-cookie"; // Install it with `npm install js-cookie`

const ENDPOINT = "https://ufoodapi.herokuapp.com";

// Function to check if the token is expired
const isTokenExpired = (token) => {
    try {
        const payload = JSON.parse(atob(token.split(".")[1])); // Decode the token
        const now = Math.floor(Date.now() / 1000); // Current time in seconds
        return payload.exp < now; // Token is expired if expiration is less than now
    } catch (error) {
        console.error("Error decoding token:", error);
        return true; // Consider the token expired in case of error
    }
};

// Redirect to login only if not already on the login page
const redirectToLogin = () => {
    if (window.location.pathname !== "/login") {
        window.location.href = "/login";
    }
};

// Login function
const login = async (email, password) => {
    try {
        const response = await fetch(`${ENDPOINT}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                email,
                password,
            }),
        });

        if (!response.ok) {
            throw new Error(`Login failed: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Login successful:", data);

        // Save token in cookies
        Cookies.set("token", data.token, { expires: 1 }); // Expires in 1 day
        Cookies.set("userId", data.id, { expires: 1 });

        return data.id;
    } catch (error) {
        console.error("An error occurred during login:", error);
        throw error;
    }
};

// Logout function
const logout = async () => {
    try {
        const token = Cookies.get("token"); // Get the token from cookies

        if (token) {
            const response = await fetch(`${ENDPOINT}/logout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            });

            if (!response.ok) {
                throw new Error(`Logout failed: ${response.statusText}`);
            }
        }

        // Clear cookies
        Cookies.remove("token");
        Cookies.remove("userId");

        console.log("Logout successful");
    } catch (error) {
        console.error("An error occurred during logout:", error);
    }
};

// Get token info
const getTokenInfo = async () => {
    try {
        const token = Cookies.get("token");

        // Check if the token exists and is not expired
        if (!token || isTokenExpired(token)) {
            console.warn("Token is expired or missing. Redirecting to login...");
            await logout();
            redirectToLogin(); // Redirect only if not already on the login page
            return null;
        }

        const response = await fetch(`${ENDPOINT}/tokenInfo`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch token info: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Token info fetched successfully:", data);
        return data; // Return user information
    } catch (error) {
        console.error("An error occurred while fetching token info:", error.message);
        return null; // Return null in case of error
    }
};

// Signup function
const signup = async (name, email, password) => {
    try {
        const response = await fetch(`${ENDPOINT}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
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
            console.error("Error details:", errorDetails);
            throw new Error(errorDetails);
        }

        const result = await response.json();
        console.log("Signup successful:", result);
        return result; // Contains the created user's info
    } catch (error) {
        console.error("An error occurred during signup:", error);
        throw error;
    }
};

// Helper functions
const getUserId = () => {
    return Cookies.get("userId");
};

const getToken = () => {
    return Cookies.get("token");
};

export default {
    login,
    logout,
    signup,
    getTokenInfo,
    getUserId,
    getToken,
    isTokenExpired,
};
