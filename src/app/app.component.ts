import { ReplaceableComponentsService } from '@abp/ng.core';
import { eIdentityComponents } from '@abp/ng.identity';
import { eThemeBasicComponents } from '@abp/ng.theme.basic';
import { Component, OnInit } from '@angular/core';
import { ExtendedLogoComponent } from './extended/logo/extended-logo.component';
import { ExtendedRolesComponent } from './extended/roles/extended-roles.component';
import { ExtendedUsersComponent } from './extended/users/extended-users.component';
import { ExtendedNavItemsComponent } from './extended/nav-items/extended-nav-items.component';
import { ExtendedRoutesComponent } from './extended/routes/extended-routes.component';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
  `,
})
export class AppComponent implements OnInit {
  constructor(private replaceableComponents: ReplaceableComponentsService) {}

  ngOnInit() {
    // Customize Logo Component
    // this.replaceableComponents.add({
    //   component: ExtendedLogoComponent,
    //   key: eThemeBasicComponents.Logo,
    // });

    // Customize Routes Component
    this.replaceableComponents.add({
      component: ExtendedRoutesComponent,
      key: eThemeBasicComponents.Routes,
    });

    // Customize Nav Items Component
    this.replaceableComponents.add({
      component: ExtendedNavItemsComponent,
      key: eThemeBasicComponents.NavItems,
    });

    // Customize Role Component
    this.replaceableComponents.add({
      component: ExtendedRolesComponent,
      key: eIdentityComponents.Roles
    });
    // Customize User Component
    this.replaceableComponents.add({
      component: ExtendedUsersComponent,
      key: eIdentityComponents.Users
    });
  }
}
