// // const API_BASE_URL = "http://localhost:8080/api/users";
// // const API_BASE_URL = "http://192.168.1.9:8080/api/users";

// // const API_BASE_URL = "http://172.20.10.4:8080/api/users";
// const API_BASE_URL = "http://3425-45-127-59-91.ngrok-free.app/api/users";
// // 3425-45-127-59-91.ngrok-free.app
// function redirectTo(page) {
//     window.location.href = page + ".html";
// }

// // Centralized Error Display
// function showError(elementId, message) {
//     const element = document.getElementById(elementId);
//     if (element) {
//         element.textContent = message;
//     } else {
//         console.error(`Element with ID '${elementId}' not found.`);
//     }
// }

// // Utility to handle API calls
// async function apiCall(endpoint, method, body) {
//     try {
//         const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
//             method: method,
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(body)
//         });

//         const data = await response.json();
//         if (!response.ok) throw new Error(data.message || "Request failed");

//         return data;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// }

// async function registerUser() {
//     const username = document.getElementById('reg-username').value;
//     const email = document.getElementById('reg-email').value;
//     const firstName = document.getElementById('reg-firstName').value;
//     const secondName = document.getElementById('reg-secondName').value;
//     const password = document.getElementById('reg-password').value;

//     if (!username || !email || !password ||!secondName ||!firstName) {
//         showError('reg-error', "All fields are required!");
//         return;
//     }

//     try {
//         const data = await apiCall("register", "POST", { username, email, password ,firstName,secondName});
//         alert("Registration successful!");
//         redirectTo("login");
//     } catch (error) {
//         showError('reg-error', error.message);
//     }
// }







 // Utility to show error messages in the UI
 function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
    }
}

// Utility to redirect to different pages
function redirectTo(page) {
    window.location.href = page + '.html';
}

// Set the API base URL
const API_BASE_URL = "https://9bf0-45-127-59-91.ngrok-free.app/api/users/register";

// Function to handle the API call
async function apiCall(url, method, body) {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        // Check if the response is OK (status 200)
        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message || "Request failed");
        }

        // If response is successful, return the data
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
}

// Function to handle registration
async function registerUser() {
    // Collect form data
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const firstName = document.getElementById('reg-firstName').value;
    const secondName = document.getElementById('reg-secondName').value;
    const password = document.getElementById('reg-password').value;

    // Check if all fields are filled
    if (!username || !email || !password || !firstName || !secondName) {
        showError('reg-error', "All fields are required!");
        return;
    }

    const userData = { username, email, firstName, secondName, password };

    // Log the user data to the console as JSON
    console.log("User Data: ", JSON.stringify(userData, null, 2));

    try {
        // Make API call to register user
        const response = await apiCall(API_BASE_URL, "POST", userData);

        // If successful, alert user and redirect to login
        alert("Registration successful!");
        redirectTo("login");
    } catch (error) {
        // Display error message
        showError('reg-error', error.message);
    }
}