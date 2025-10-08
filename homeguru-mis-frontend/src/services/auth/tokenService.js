const TOKEN_KEY = process.env.REACT_APP_TOKEN_KEY || 'homeguru_token';
const REFRESH_TOKEN_KEY = process.env.REACT_APP_REFRESH_TOKEN_KEY || 'homeguru_refresh_token';

class TokenService {
  getAccessToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  setAccessToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  }

  setRefreshToken(token) {
    localStorage.setItem(REFRESH_TOKEN_KEY, token);
  }

  setTokens(accessToken, refreshToken) {
    this.setAccessToken(accessToken);
    if (refreshToken) {
      this.setRefreshToken(refreshToken);
    }
  }

  clearTokens() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }

  isAuthenticated() {
    return !!this.getAccessToken();
  }
}

export const tokenService = new TokenService();
export default tokenService;
