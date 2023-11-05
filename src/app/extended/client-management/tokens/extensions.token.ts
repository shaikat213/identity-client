import {
  CreateFormPropContributorCallback,
  EditFormPropContributorCallback,
  EntityActionContributorCallback,
  EntityPropContributorCallback,
  ToolbarActionContributorCallback,
} from '@abp/ng.theme.shared/extensions';
import { InjectionToken } from '@angular/core';
import { ClientDto } from '@proxy/dto-models';
import { DEFAULT_CLIENTS_ENTITY_ACTIONS } from '../defaults/default-clients-entity-actions';
import { DEFAULT_CLIENTS_ENTITY_PROPS } from '../defaults/default-clients-entity-props';
import {
  DEFAULT_CLIENTS_CREATE_FORM_PROPS,
  DEFAULT_CLIENTS_EDIT_FORM_PROPS,
} from '../defaults/default-clients-form-props';
import { DEFAULT_CLIENTS_TOOLBAR_ACTIONS } from '../defaults/default-clients-toolbar-actions';
import { eClientManagementComponents } from '../enums/components';

export const DEFAULT_CLIENT_MANAGEMENT_ENTITY_ACTIONS = {
  [eClientManagementComponents.Clients]: DEFAULT_CLIENTS_ENTITY_ACTIONS,
};

export const DEFAULT_CLIENT_MANAGEMENT_TOOLBAR_ACTIONS = {
  [eClientManagementComponents.Clients]: DEFAULT_CLIENTS_TOOLBAR_ACTIONS,
};

export const DEFAULT_CLIENT_MANAGEMENT_ENTITY_PROPS = {
  [eClientManagementComponents.Clients]: DEFAULT_CLIENTS_ENTITY_PROPS,
};

export const DEFAULT_CLIENT_MANAGEMENT_CREATE_FORM_PROPS = {
  [eClientManagementComponents.Clients]: DEFAULT_CLIENTS_CREATE_FORM_PROPS,
};

export const DEFAULT_CLIENT_MANAGEMENT_EDIT_FORM_PROPS = {
  [eClientManagementComponents.Clients]: DEFAULT_CLIENTS_EDIT_FORM_PROPS,
};

export const CLIENT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS =
  new InjectionToken<EntityActionContributors>('CLIENT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS');

export const CLIENT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS =
  new InjectionToken<ToolbarActionContributors>('CLIENT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS');

export const CLIENT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS =
  new InjectionToken<EntityPropContributors>('CLIENT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS');

export const CLIENT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS =
  new InjectionToken<CreateFormPropContributors>('CLIENT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS');

export const CLIENT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS =
  new InjectionToken<EditFormPropContributors>('CLIENT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS');

// Fix for TS4023 -> https://github.com/microsoft/TypeScript/issues/9944#issuecomment-254693497
type EntityActionContributors = Partial<{
  [eClientManagementComponents.Clients]: EntityActionContributorCallback<ClientDto>[];
}>;
type ToolbarActionContributors = Partial<{
  [eClientManagementComponents.Clients]: ToolbarActionContributorCallback<ClientDto[]>[];
}>;
type EntityPropContributors = Partial<{
  [eClientManagementComponents.Clients]: EntityPropContributorCallback<ClientDto>[];
}>;
type CreateFormPropContributors = Partial<{
  [eClientManagementComponents.Clients]: CreateFormPropContributorCallback<ClientDto>[];
  //[eClientManagementComponents.Clients]: CreateFormPropContributorCallback<ClientCreateDto>[];
}>;
type EditFormPropContributors = Partial<{
  [eClientManagementComponents.Clients]: EditFormPropContributorCallback<ClientDto>[];
  //[eClientManagementComponents.Clients]: EditFormPropContributorCallback<ClientUpdateDto>[];
}>;
