import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { FeatureManagementModule } from '@abp/ng.feature-management';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { UiExtensionsModule } from '@abp/ng.theme.shared/extensions';
import { ModuleWithProviders, NgModule, NgModuleFactory } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ClientManagementRoutingModule } from './client-management-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { ClientManagementExtensionsGuard } from './guards/extensions.guard';
import { ClientManagementConfigOptions } from './models/config-options';
import {
  CLIENT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS,
  CLIENT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS,
  CLIENT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS,
  CLIENT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS,
  CLIENT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS,
} from './tokens/extensions.token';

@NgModule({
  declarations: [ClientsComponent],
  exports: [ClientsComponent],
  imports: [
    ClientManagementRoutingModule,
    NgxValidateCoreModule,
    CoreModule,
    ThemeSharedModule,
    NgbDropdownModule,
    FeatureManagementModule,
    UiExtensionsModule,
  ],
  providers: [ClientManagementExtensionsGuard],
})
export class ClientManagementModule {
  static forChild(options: ClientManagementConfigOptions = {}, ): ModuleWithProviders<ClientManagementModule> {
    return {
      ngModule: ClientManagementModule,
      providers: [
        {
          provide: CLIENT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS,
          useValue: options.entityActionContributors,
        },
        {
          provide: CLIENT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS,
          useValue: options.toolbarActionContributors,
        },
        {
          provide: CLIENT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS,
          useValue: options.entityPropContributors,
        },
        {
          provide: CLIENT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS,
          useValue: options.createFormPropContributors,
        },
        {
          provide: CLIENT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS,
          useValue: options.editFormPropContributors,
        },
        ClientManagementExtensionsGuard,
      ],
    };
  }

  static forLazy(options: ClientManagementConfigOptions = {},): NgModuleFactory<ClientManagementModule> {
    return new LazyModuleFactory(ClientManagementModule.forChild(options));
  }
}
