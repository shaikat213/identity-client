import { getPasswordValidators } from '@abp/ng.theme.shared';
import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { ClientDto } from '@proxy/dto-models';

export const DEFAULT_CLIENTS_CREATE_FORM_PROPS = FormProp.createMany<ClientDto>([
  {
    type: ePropType.String,
    name: 'clientId',
    id: 'client-id',
    displayName: 'Client ID',
    //displayName: 'AbpClientManagement::ClientId',
    validators: () => [Validators.required, Validators.maxLength(256)],
  },
  {
    type: ePropType.String,
    name: 'clientName',
    id: 'client-name',
    displayName: 'Client Name',
    //displayName: 'AbpClientManagement::ClientName',
    validators: () => [Validators.required, Validators.maxLength(256)],
  },
  {
    type: ePropType.String,
    name: 'redirectUri',
    id: 'redirect-uri',
    displayName: 'Redirect Uri',
    //displayName: 'AbpClientManagement::RootUrl',
    validators: () => [Validators.required, Validators.maxLength(1024)],
  },

  {
    type: ePropType.String,
    name: 'description',
    id: 'description',
    displayName: 'Description',
    //displayName: 'AbpClientManagement::RootUrl',
    validators: () => [Validators.required, Validators.maxLength(1024)],
  },
  // {
  //   type: ePropType.Enum,
  //   name: 'clientType',
  //   id: 'client-type',
  //   displayName: 'Client Type',
  //   //displayName: 'AbpClientManagement::RootUrl',
  //   // options: data => {
  //   //   const service = data.getInjected(MyIdentityService);
  //   //   return service.getMyPropOptions()
  //   //     .pipe(
  //   //       map(({items}) => items.map(
  //   //         item => ({key: item.name, value: item.id })
  //   //       )),
  //   //     );
  //   // },
  //   validators: () => [Validators.required, Validators.maxLength(1024)],
  // },
  // {
  //   type: ePropType.String,
  //   name: 'secret',
  //   id: 'client-secret',
  //   displayName: 'Client Secret',
  //   //displayName: 'AbpClientManagement::ClientSecret',
  //   validators: () => [Validators.required, Validators.maxLength(256)],
  // },
  // {
  //   type: ePropType.Email,
  //   name: 'adminEmailAddress',
  //   displayName: 'AbpClientManagement::DisplayName:AdminEmailAddress',
  //   id: 'admin-email-address',
  //   validators: () => [Validators.required, Validators.maxLength(256), Validators.email],
  // },
  // {
  //   type: ePropType.Password,
  //   name: 'adminPassword',
  //   displayName: 'AbpClientManagement::DisplayName:AdminPassword',
  //   id: 'admin-password',
  //   autocomplete: 'new-password',
  //   validators: data => [Validators.required, ...getPasswordValidators({ get: data.getInjected })],
  // },
]);

export const DEFAULT_CLIENTS_EDIT_FORM_PROPS = DEFAULT_CLIENTS_CREATE_FORM_PROPS; //.slice(0, 1);
