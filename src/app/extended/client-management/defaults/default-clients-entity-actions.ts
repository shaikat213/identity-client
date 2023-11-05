import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { ClientDto } from '@proxy/dto-models';
import { ClientsComponent } from '../clients/clients.component';

export const DEFAULT_CLIENTS_ENTITY_ACTIONS = EntityAction.createMany<ClientDto>([
  {
    text: 'AbpClientManagement::Edit',
    action: data => {
      const component = data.getInjected(ClientsComponent);
      component.editClient(data.record.id);
    },
    permission: 'AbpClientManagement.Clients.Edit',
  },
  {
    text: 'AbpClientManagement::Delete',
    action: data => {
      const component = data.getInjected(ClientsComponent);
      component.delete(data.record.id, data.record.clientName);
    },
    permission: 'AbpClientManagement.Clients.Delete',
  },
  // {
  //   text: 'AbpClientManagement::Permission:ManageFeatures',
  //   action: data => {
  //     const component = data.getInjected(ClientsComponent);
  //     component.openFeaturesModal(data.record.id);
  //   },
  //   permission: 'AbpClientManagement.Clients.ManageFeatures',
  // },
]);
