import {
  CreateFormPropContributorCallback,
  EditFormPropContributorCallback,
  EntityActionContributorCallback,
  EntityPropContributorCallback,
  ToolbarActionContributorCallback,
} from '@abp/ng.theme.shared/extensions';
import { ClientDto } from '@proxy/dto-models';
import { eClientManagementComponents } from '../enums/components';

export type ClientManagementEntityActionContributors = Partial<{
  [eClientManagementComponents.Clients]: EntityActionContributorCallback<ClientDto>[];
}>;

export type ClientManagementToolbarActionContributors = Partial<{
  [eClientManagementComponents.Clients]: ToolbarActionContributorCallback<ClientDto[]>[];
}>;

export type ClientManagementEntityPropContributors = Partial<{
  [eClientManagementComponents.Clients]: EntityPropContributorCallback<ClientDto>[];
}>;

export type ClientManagementCreateFormPropContributors = Partial<{
  [eClientManagementComponents.Clients]: CreateFormPropContributorCallback<ClientDto>[];
  //[eClientManagementComponents.Clients]: CreateFormPropContributorCallback<ClientCreateDto>[];
}>;

export type ClientManagementEditFormPropContributors = Partial<{
  [eClientManagementComponents.Clients]: EditFormPropContributorCallback<ClientDto>[];
  //[eClientManagementComponents.Clients]: EditFormPropContributorCallback<ClientUpdateDto>[];
}>;

export interface ClientManagementConfigOptions {
  entityActionContributors?: ClientManagementEntityActionContributors;
  toolbarActionContributors?: ClientManagementToolbarActionContributors;
  entityPropContributors?: ClientManagementEntityPropContributors;
  createFormPropContributors?: ClientManagementCreateFormPropContributors;
  editFormPropContributors?: ClientManagementEditFormPropContributors;
}
