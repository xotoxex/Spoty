const clientId = "6dfae17775944488b32d2de65e3c5421";
const code = undefined;

if (!code) {
  redirectToAuthCodeFlow(clientId);
} else {
  const accessToken = await getAccessToken(clientId, code);
  const profile = await fetchProfile(accessToken);
  populateUI(profile);
}

async function redirectToAuthCodeFlow(clientId) {
  // TODO: Redirect to Spotify authorization page
}

async function getAccessToken(clientId, code) {
  // TODO: Get access token for code
}

async function fetchProfile(token) {
  // TODO: Call Web API
}

function populateUI(profile) {
  // TODO: Update UI with profile data
}
