import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
  },
  {
    path: 'identity',
    //loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy({})),
    loadChildren: () =>
      import('./extended/identity-extended.module').then(m => m.IdentityExtendedModule),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
  },

  {
    path: 'client-management',
    loadChildren: () =>
      import('./extended/client-management/client-management.module').then(m => m.ClientManagementModule),
      //import('./extended/clients/extended-clients.module').then(m => m.ExtendedClientsModule),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
