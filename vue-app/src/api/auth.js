

const ENDPOINT = "https://ufoodapi.herokuapp.com";


const login = async function(email, password) {
    await fetch(`${ENDPOINT}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    .then((response) => {
        const data = response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.id);
        return data.id;
    })
    .catch((error) => {
        console.error('an error have occurred:', error);
    });
}

const logout = async function(email, password) {
   await fetch(`${ENDPOINT}/auth/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    .then((response) => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        return response;
    })
    .catch((error) => {
        
        console.error('an error have occurred:', error);
    });
}

const getTokenInfo = async function(token) {
    
    await fetch(`${ENDPOINT}/auth/token`, {
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
}

const signup = async function(name, email, password) {
    await fetch(`${ENDPOINT}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${name}&email=${email}&password=${password}`
    })
    .then((response) => {
        return response.text();
    })
    .catch((error) => {
        console.error('an error have occurred:', error);
    });
}



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
