import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface ClientInputDto {
  createClient: CreateClientDto;
  createClientSecrets: CreateClientSecretDto[];
  scopes: string[];
  grantTypes: string[];
  permissions: string[];
  corsOrigins: string[];
}

export interface CreateClientDto {
  clientId?: string;
  clientName?: string;
  description?: string;
  clientUri?: string;
  logoUri?: string;
  secret?: string;
  redirectUri?: string;
  postLogoutRedirectUri?: string;
  frontChannelLogoutUri?: string;
  requirePkce: boolean;
  isRequireConsent: boolean;
  requireClientSecret: boolean;
}

export interface CreateClientSecretDto {
  clientId?: string;
  type?: string;
  value?: string;
  description?: string;
  expiration?: string;
}

export interface GetClientsInput extends PagedAndSortedResultRequestDto {
  filter?: string;
}

export interface ResetPasswordInputDto {
  userId?: string;
  newPassword?: string;
}

export interface ResetPasswordRequestInputDto {
  emailAddress?: string;
  returnUrl?: string;
}
