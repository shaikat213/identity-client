import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { ClientDto } from '@proxy/dto-models';
import { ClientsComponent } from '../clients/clients.component';

export const DEFAULT_CLIENTS_TOOLBAR_ACTIONS = ToolbarAction.createMany<ClientDto[]>([
  {
    //text: 'AbpClientManagement::NewClient',
    text: 'New Client',
    action: data => {
      const component = data.getInjected(ClientsComponent);
      component.addClient();
    },
    permission: 'AbpClientManagement.Clients.Create',
    icon: 'fa fa-plus',
  },
  // {
  //   text: 'AbpClientManagement::ManageHostFeatures',
  //   action: data => {
  //     const component = data.getInjected(ClientsComponent);
  //     component.openFeaturesModal('');
  //   },
  //   permission: 'FeatureManagement.ManageHostFeatures',
  //   icon: 'fa fa-cog',
  // },
]);
