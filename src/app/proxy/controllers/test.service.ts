import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  apiName = 'Default';

  deleteById = (id: number) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/Test/${id}`,
    },
    { apiName: this.apiName });

  get = () =>
    this.restService.request<any, string[]>({
      method: 'GET',
      url: '/api/Test',
    },
    { apiName: this.apiName });

  getById = (id: number) =>
    this.restService.request<any, string>({
      method: 'GET',
      responseType: 'text',
      url: `/api/Test/${id}`,
    },
    { apiName: this.apiName });

  postByValue = (value: string) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/Test',
      body: value,
    },
    { apiName: this.apiName });

  putByIdAndValue = (id: number, value: string) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/Test/${id}`,
      body: value,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
