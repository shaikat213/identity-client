import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4201';
const apiUrl = 'https://localhost:44392';
// const apiUrl = 'http://scheduleapi.ghonta.com';
const issuerUrl = 'https://localhost:44380';
// const issuerUrl = 'https://pwdidentity.ghonta.com';

export const environment = {
  production: false,
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
