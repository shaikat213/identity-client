import type { ClientDto } from './dto-models/models';
import type { ClientInputDto, GetClientsInput } from './input-dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  apiName = 'Default';

  create = (input: ClientInputDto) =>
    this.restService.request<any, ClientDto>({
      method: 'POST',
      url: '/api/app/client',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/client/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, ClientDto>({
      method: 'GET',
      url: `/api/app/client/${id}`,
    },
    { apiName: this.apiName });

  getByClientId = (clientId: string) =>
    this.restService.request<any, ClientDto>({
      method: 'GET',
      url: `/api/app/client/by-client-id/${clientId}`,
    },
    { apiName: this.apiName });

  getCount = () =>
    this.restService.request<any, number>({
      method: 'GET',
      url: '/api/app/client/count',
    },
    { apiName: this.apiName });

  getList = () =>
    this.restService.request<any, ClientDto[]>({
      method: 'GET',
      url: '/api/app/client',
    },
    { apiName: this.apiName });

  update = (input: ClientInputDto) =>
    this.restService.request<any, ClientDto>({
      method: 'PUT',
      url: '/api/app/client',
      body: input,
    },
    { apiName: this.apiName });

  getListByClientsInput = (clientsInput: GetClientsInput) =>
    this.restService.request<any, PagedResultDto<ClientDto>>({
      method: 'GET',
      url: '/api/app/client/get-list',
      params: { filter: clientsInput.filter, sorting: clientsInput.sorting, skipCount: clientsInput.skipCount, maxResultCount: clientsInput.maxResultCount },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
