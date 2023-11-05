import type { PermissionDto } from './dto-models/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PermissionMapService {
  apiName = 'Default';

  get = (providerName: string, providerKeys: string[], permissionGroupKey: string) =>
    this.restService.request<any, PermissionDto>({
      method: 'GET',
      url: '/api/app/permission-map',
      params: { providerName, providerKeys, permissionGroupKey },
    },
    { apiName: this.apiName });

  isGrantedByProviderNameAndProviderKeysAndPermissionKeyAndPermissionGroupKey = (providerName: string, providerKeys: string[], permissionKey: string, permissionGroupKey: string) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: '/api/app/permission-map/is-granted',
      params: { providerName, permissionKey, permissionGroupKey },
      body: providerKeys,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
