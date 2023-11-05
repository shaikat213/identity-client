import type { ColleagueDto, OrganizationUnitDto } from './dto-models/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrganizationUnitService {
  apiName = 'Default';

  latest = () =>
    this.restService.request<any, string>({
      method: 'GET',
      responseType: 'text',
      url: '/api/app/organization-unit/latest',
    },
    { apiName: this.apiName });

  mapUnit = () =>
    this.restService.request<any, string[]>({
      method: 'POST',
      url: '/api/app/organization-unit/map-unit',
    },
    { apiName: this.apiName });

  officeUsersByUserName = (userName: string) =>
    this.restService.request<any, ColleagueDto[]>({
      method: 'GET',
      url: '/api/app/organization-unit/office-users',
      params: { userName },
    },
    { apiName: this.apiName });

  offices = () =>
    this.restService.request<any, OrganizationUnitDto[]>({
      method: 'GET',
      url: '/api/app/organization-unit/offices',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
