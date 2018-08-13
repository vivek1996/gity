interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'bH0qh7s2ahOPGRVK6EjvrpH84LkiNy66',
  CLIENT_DOMAIN: 'vivekm.auth0.com',
  AUDIENCE: 'https://vivekm.auth0.com/userinfo',
  REDIRECT: 'http://gitty.vivekm.me/profile',
  SCOPE: 'openid profile'
};
