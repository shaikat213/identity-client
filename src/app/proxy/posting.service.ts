import type { PostingDto } from './dto-models/models';
import type { IdentityUserDto } from './volo/abp/identity/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostingService {
  apiName = 'Default';

  attachToUser = () =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/posting/attach-to-user',
    },
    { apiName: this.apiName });

  getUserByNameByUserNmae = (userNmae: string) =>
    this.restService.request<any, IdentityUserDto>({
      method: 'GET',
      url: '/api/app/posting/user-by-name',
      params: { userNmae },
    },
    { apiName: this.apiName });

  getUserByUserId = (userId: string) =>
    this.restService.request<any, IdentityUserDto>({
      method: 'GET',
      url: `/api/app/posting/user/${userId}`,
    },
    { apiName: this.apiName });

  officeUsersByUserName = (userName: string) =>
    this.restService.request<any, void>({
      method: 'GET',
      url: '/api/app/posting/office-users',
      params: { userName },
    },
    { apiName: this.apiName });

  postingInfoById = (id: number) =>
    this.restService.request<any, PostingDto>({
      method: 'GET',
      url: `/api/app/posting/${id}/posting-info`,
    },
    { apiName: this.apiName });

  postingListByIds = (ids: string) =>
    this.restService.request<any, PostingDto[]>({
      method: 'GET',
      url: '/api/app/posting/posting-list',
      params: { ids },
    },
    { apiName: this.apiName });

  syncPosting = () =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/posting/sync-posting',
    },
    { apiName: this.apiName });

  userInfoByUserNmae = (userNmae: string) =>
    this.restService.request<any, PostingDto>({
      method: 'GET',
      url: '/api/app/posting/user-info',
      params: { userNmae },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
