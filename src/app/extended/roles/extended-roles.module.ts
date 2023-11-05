import { UiExtensionsModule } from '@abp/ng.theme.shared/extensions';
import { NgModule } from '@angular/core';
import { ExtendedRolesComponent } from './extended-roles.component';
import { PermissionManagementModule } from '@abp/ng.permission-management';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ExtendedRolesComponent],
  imports: [SharedModule, UiExtensionsModule, PermissionManagementModule],
  exports: [ExtendedRolesComponent],
})
export class ExtendedRolesModule {}
