import { UiExtensionsModule } from '@abp/ng.theme.shared/extensions';
import { NgModule } from '@angular/core';
import { PermissionManagementModule } from '@abp/ng.permission-management';
import { ExtendedUsersComponent } from './extended-users.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ExtendedUsersComponent],
  imports: [
    SharedModule,
    NgbNavModule,
    UiExtensionsModule,
    PermissionManagementModule,
  ],
  exports: [ExtendedUsersComponent],
})
export class ExtendedUsersModule { }
