import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { ClientDto } from '@proxy/dto-models';

export const DEFAULT_CLIENTS_ENTITY_PROPS = EntityProp.createMany<ClientDto>([
  {
    type: ePropType.String,
    name: 'clientId',
    displayName: 'Client Id',
    //displayName: 'AbpClientManagement::clientId',
    sortable: true,
  },
  {
    type: ePropType.String,
    name: 'clientName',
    displayName: 'Client Name',
    //displayName: 'AbpClientManagement::ClientName',
    sortable: true,
  },
  {
    type: ePropType.String,
    name: 'redirectUri',
    displayName: 'Redirect Uri',
    //displayName: 'AbpClientManagement::RootUrl',
    sortable: true,
  },
  {
    type: ePropType.String,
    name: 'description',
    displayName: 'Description',
    //displayName: 'AbpClientManagement::RootUrl',
    sortable: true,
  },
  // {
  //   type: ePropType.String,
  //   name: 'secret',
  //   displayName: 'Client Secret',
  //   //displayName: 'AbpClientManagement::ClientSecret',
  //   sortable: true,
  // },
]);
