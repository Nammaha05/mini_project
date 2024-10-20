function logout() {
    localStorage.removeItem('loggedIn'); // Remove logged in state
    const message = document.getElementById('logout-message');
    message.classList.remove('hidden');
    message.style.color = 'black';
    message.textContent = 'You have been logged out. Redirecting to login page...';

    // Redirect to login page after a short delay
    setTimeout(() => {
        window.location.href = 'login&registration.html';
    }, 2000);
}
