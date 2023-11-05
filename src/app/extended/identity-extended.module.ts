import { SetPassowrdComponent } from './action/set-password/set-passowrd.component';
// src/app/identity-extended/identity-extended.module.ts

import { CoreModule } from '@abp/ng.core';
import { IdentityModule } from '@abp/ng.identity';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserViewComponent } from './action/user-view/user-view.component';
import { identityEntityActionContributors } from './entity-action-contributors';

@NgModule({
  imports: [
    CoreModule,
    ThemeSharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SetPassowrdComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              IdentityModule.forLazy({
                entityActionContributors: identityEntityActionContributors,
              }),
          },
        ],
      }
    ]),
  ],
  declarations: [SetPassowrdComponent, UserViewComponent],
  //declarations: [UserViewComponent, SetPassowrdComponent],
})
export class IdentityExtendedModule {}
