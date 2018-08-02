interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'DIHrFgcEHN-87t3AMcs5AoQeUHyDrUOh',
  CLIENT_DOMAIN: 'vivekm.auth0.com',
  AUDIENCE: 'https://vivekm.auth0.com/userinfo',
  REDIRECT: 'http://localhost:4200/profile',
  SCOPE: 'openid profile'
};
