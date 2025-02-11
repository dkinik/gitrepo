// Check if the user is logged in
if (localStorage.getItem('loggedIn') === 'true') {
    document.getElementById('successMessage').style.display = 'block';
    // Optionally, clear the flag so the message doesn't show on subsequent visits
    // localStorage.removeItem('loggedIn');
}
