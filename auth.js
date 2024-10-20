const authForm = document.getElementById('auth-form');
const messageElement = document.getElementById('message');
const toggleFormLink = document.getElementById('toggle-form');
const formTitle = document.getElementById('form-title');
const submitButton = document.getElementById('submit-button');

// Function to handle form submission
authForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Determine if the user is registering or logging in
    if (submitButton.innerText === "Login") {
        login(username, password);
    } else {
        register(username, password);
    }
});

// Function to log in the user
function login(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        messageElement.classList.remove('hidden');
        messageElement.style.color = 'black';
        messageElement.textContent = 'Login successful! Redirecting...';
        localStorage.setItem('loggedIn', 'true');

        setTimeout(() => {
            window.location.href = 'login&registration.html'; // Redirect to the home page after successful login
        }, 2000);
    } else {
        messageElement.classList.remove('hidden');
        messageElement.style.color = 'red';
        messageElement.textContent = 'Invalid username or password. Please try again.';
    }
}

// Function to register a new user
function register(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(u => u.username === username)) {
        messageElement.classList.remove('hidden');
        messageElement.style.color = 'red';
        messageElement.textContent = 'Username already exists. Please choose another.';
        return;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    messageElement.classList.remove('hidden');
    messageElement.style.color = 'black';
    messageElement.textContent = 'Registration successful! Redirecting to login...';

    setTimeout(() => {
        toggleToLogin(); // Switch to login form
    }, 2000);
}

// Function to toggle between login and registration forms
toggleFormLink.addEventListener('click', function() {
    if (submitButton.innerText === "Login") {
        toggleToRegister();
    } else {
        toggleToLogin();
    }
});

function toggleToRegister() {
    formTitle.innerText = 'Register';
    submitButton.innerText = 'Register';
    toggleFormLink.innerText = 'Already have an account? Login here';
    messageElement.classList.add('hidden');
}

function toggleToLogin() {
    formTitle.innerText = 'Login';
    submitButton.innerText = 'Login';
    toggleFormLink.innerText = 'Don\'t have an account? Register here';
    messageElement.classList.add('hidden');
}
