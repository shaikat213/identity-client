import { Environment } from '@abp/ng.core';

const baseUrl = 'http://id.mis1pwd.com';
const apiUrl = 'http://idapi.mis1pwd.com';
const issuerUrl = 'https://auth.mis1pwd.com';
//const apiUrl = 'https://localhost:44392';
//const issuerUrl = 'https://localhost:44380';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Identity',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: issuerUrl,
    redirectUri: baseUrl,
    clientId: 'Identity_App',
    responseType: 'code',
    scope: 'offline_access openid profile role email phone Identity',
    requireHttps: true
  },
  apis: {
    default: {
      url: apiUrl,
      rootNamespace: 'PWD.Identity',
    },
  },
} as Environment;
