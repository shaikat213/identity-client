import type { EntityDto } from '@abp/ng.core';

export interface ClientDto {
  id?: string;
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
  requireConsent: boolean;
  requireClientSecret: boolean;
  scopes: string[];
  grantTypes: string[];
  permissions: string[];
  corsOrigins: string[];
  protocolType?: string;
  enabled: boolean;
}

export interface ColleagueDto extends EntityDto<string> {
  userName?: string;
  name?: string;
  surName?: string;
}

export interface OrganizationUnitDto extends EntityDto<string> {
  parentId?: string;
  userId?: string;
  code?: string;
  displayName?: string;
  roles: OrganizationUnitRoleDto[];
}

export interface OrganizationUnitRoleDto {
  roleId?: string;
  organizationUnitId?: string;
}

export interface PermissionDto {
  permissions: Record<string, boolean>;
}

export interface PostingDto extends EntityDto<string> {
  postingId: number;
  employeeId: number;
  name?: string;
  nameBn?: string;
  post?: string;
  designation?: string;
  designationBn?: string;
  office?: string;
  officeBn?: string;
  orgUniId?: string;
}
