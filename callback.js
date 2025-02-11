document.addEventListener('DOMContentLoaded', function () {
    // Parse the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');

    // Check if the code and state are available
    if (code && state) {
        console.log('Received OAuth callback');
        console.log('Code:', code);
        console.log('State:', state);

        // Call the Lambda function to exchange the code for an access token
        fetch('https://lv0nhqm70j.execute-api.us-east-1.amazonaws.com/dev/callback?code=' + code + '&state=' + state, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(tokenData => {
            if (tokenData.access_token) {
                // Store the access token in localStorage or sessionStorage
                console.log('Access token received:', tokenData.access_token);
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('TOKEN', tokenData.access_token);

                // Redirect the user to the home page or dashboard
                window.location.href = 'https://dkinik.github.io/gitrepo'; // Or wherever you want the user to go after successful login
            } else {
                console.error('Error: No access token received');
                alert('Error: Could not retrieve access token');
            }
        })
        .catch(error => {
            console.error('Error during token exchange:', error);
            alert('Error during token exchange');
        });
    } else {
        console.error('Error: Missing code or state');
        alert('Error: Missing code or state');
    }
});
