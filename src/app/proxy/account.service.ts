import type { ResetPasswordInputDto, ResetPasswordRequestInputDto } from './input-dtos/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  apiName = 'Default';

  resetPasswordByInputDto = (inputDto: ResetPasswordInputDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/account/reset-password',
      body: inputDto,
    },
    { apiName: this.apiName });

  resetPasswordRequestByInput = (input: ResetPasswordRequestInputDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/account/reset-password-request',
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
