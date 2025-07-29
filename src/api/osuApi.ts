// osu! API integration for Roguesu
// Uses OAuth2 client credentials from .env
// Routes through Vite proxy to avoid CORS issues

const CLIENT_ID = import.meta.env.VITE_OSU_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_OSU_CLIENT_SECRET;
const TOKEN_URL = '/api/osu/oauth/token';
const API_BASE_URL = '/api/osu/api/v2';

let accessToken: string | null = null;
let tokenExpiry: number | null = null;

async function getAccessToken() {
  if (accessToken && tokenExpiry && Date.now() < tokenExpiry) {
    return accessToken;
  }
  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials&scope=public`,
  });
  const data = await res.json();
  accessToken = data.access_token;
  tokenExpiry = Date.now() + (data.expires_in - 60) * 1000; // Subtract 60s for safety
  return accessToken;
}

export async function fetchOsuUser(username: string) {
  const token = await getAccessToken();
  const res = await fetch(`${API_BASE_URL}/users/${encodeURIComponent(username)}/osu`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('osu! user not found');
  return await res.json();
}
