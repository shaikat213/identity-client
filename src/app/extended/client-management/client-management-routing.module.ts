import {
  AuthGuard,
  PermissionGuard,
  ReplaceableComponents,
  ReplaceableRouteContainerComponent,
  RouterOutletComponent,
} from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { eClientManagementComponents } from './enums/components';
import { ClientManagementExtensionsGuard } from './guards';

const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  {
    path: '',
    component: RouterOutletComponent,
    canActivate: [AuthGuard, PermissionGuard, ClientManagementExtensionsGuard],
    children: [
      {
        path: 'clients',
        component: ReplaceableRouteContainerComponent,
        data: {
          requiredPolicy: 'AbpClientManagement.Clients',
          replaceableComponent: {
            key: eClientManagementComponents.Clients,
            defaultComponent: ClientsComponent,
          } as ReplaceableComponents.RouteData<ClientsComponent>,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientManagementRoutingModule {}
