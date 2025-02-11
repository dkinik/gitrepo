document.addEventListener('DOMContentLoaded', function () {
    // Ensure the element exists before trying to add an event listener
    const loginButton = document.getElementById('loginButton');
    
    if (loginButton) {
        loginButton.addEventListener('click', function () {
            // Your code for handling the button click here
            window.location.href = 'https://github.com/login/oauth/authorize?client_id=Ov23li5blY0ABDArPh1W&redirect_uri=https://dkinik.github.io/gitrepo/callback&scope=read:user';
        });
    } else {
        console.error('Login button not found.');
    }
});
