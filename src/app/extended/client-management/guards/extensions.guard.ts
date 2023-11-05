import { ConfigStateService } from '@abp/ng.core';
import {
  ExtensionsService,
  getObjectExtensionEntitiesFromStore,
  mapEntitiesToContributors,
  mergeWithDefaultActions,
  mergeWithDefaultProps,
} from '@abp/ng.theme.shared/extensions';
import { Injectable, Injector } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mapTo, tap } from 'rxjs/operators';
import { eClientManagementComponents } from '../enums/components';
import {
  ClientManagementCreateFormPropContributors,
  ClientManagementEditFormPropContributors,
  ClientManagementEntityActionContributors,
  ClientManagementEntityPropContributors,
  ClientManagementToolbarActionContributors,
} from '../models/config-options';
import {
  DEFAULT_CLIENT_MANAGEMENT_CREATE_FORM_PROPS,
  DEFAULT_CLIENT_MANAGEMENT_EDIT_FORM_PROPS,
  DEFAULT_CLIENT_MANAGEMENT_ENTITY_ACTIONS,
  DEFAULT_CLIENT_MANAGEMENT_ENTITY_PROPS,
  DEFAULT_CLIENT_MANAGEMENT_TOOLBAR_ACTIONS,
  CLIENT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS,
  CLIENT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS,
  CLIENT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS,
  CLIENT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS,
  CLIENT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS,
} from '../tokens/extensions.token';

@Injectable()
export class ClientManagementExtensionsGuard implements CanActivate {
  constructor(private injector: Injector) {}

  canActivate(): Observable<boolean> {
    const extensions: ExtensionsService = this.injector.get(ExtensionsService);
    const actionContributors: ClientManagementEntityActionContributors =
      this.injector.get(CLIENT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS, null) || {};
    const toolbarContributors: ClientManagementToolbarActionContributors =
      this.injector.get(CLIENT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS, null) || {};
    const propContributors: ClientManagementEntityPropContributors =
      this.injector.get(CLIENT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS, null) || {};
    const createFormContributors: ClientManagementCreateFormPropContributors =
      this.injector.get(CLIENT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS, null) || {};
    const editFormContributors: ClientManagementEditFormPropContributors =
      this.injector.get(CLIENT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS, null) || {};

    const configState = this.injector.get(ConfigStateService);
    return getObjectExtensionEntitiesFromStore(configState, 'ClientManagement').pipe(
      map(entities => ({
        [eClientManagementComponents.Clients]: entities.Client,
      })),
      mapEntitiesToContributors(configState, 'ClientManagement'),
      tap(objectExtensionContributors => {
        mergeWithDefaultActions(
          extensions.entityActions,
          DEFAULT_CLIENT_MANAGEMENT_ENTITY_ACTIONS,
          actionContributors,
        );
        mergeWithDefaultActions(
          extensions.toolbarActions,
          DEFAULT_CLIENT_MANAGEMENT_TOOLBAR_ACTIONS,
          toolbarContributors,
        );
        mergeWithDefaultProps(
          extensions.entityProps,
          DEFAULT_CLIENT_MANAGEMENT_ENTITY_PROPS,
          objectExtensionContributors.prop,
          propContributors,
        );
        mergeWithDefaultProps(
          extensions.createFormProps,
          DEFAULT_CLIENT_MANAGEMENT_CREATE_FORM_PROPS,
          objectExtensionContributors.createForm,
          createFormContributors,
        );
        mergeWithDefaultProps(
          extensions.editFormProps,
          DEFAULT_CLIENT_MANAGEMENT_EDIT_FORM_PROPS,
          objectExtensionContributors.editForm,
          editFormContributors,
        );
      }),
      mapTo(true),
    );
  }
}
