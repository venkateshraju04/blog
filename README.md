Fork of https://github.com/mk965/mengke.me

const client_id = '....'; // Replace with your actual client ID
const client_secret = '....'; // Replace with your actual client secret
const redirect_uri = 'https://blog.mohitnagaraj.in/';

// Extract the authorization code from the URL
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

if (code) {
const authHeader = btoa(`${client_id}:${client_secret}`);

const tokenRequestOptions = {
method: 'POST',
headers: {
'Authorization': `Basic ${authHeader}`,
'Content-Type': 'application/x-www-form-urlencoded'
},
body: new URLSearchParams({
grant_type: 'authorization_code',
code: code,
redirect_uri: redirect_uri
})
};

fetch('https://accounts.spotify.com/api/token', tokenRequestOptions)
.then(response => response.json())
.then(data => {
console.log('Access Token:', data.access_token);
console.log('Refresh Token:', data.refresh_token);
// Store tokens securely for future use
})
.catch(error => console.error('Error:', error));
}
