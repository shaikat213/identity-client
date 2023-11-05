import { PagedResultDto } from '@abp/ng.core';
import { ClientDto } from '@proxy/dto-models';

export namespace ClientManagement {
  export interface State {
    result: PagedResultDto<ClientDto>;
    selectedItem: ClientDto;
  }
}
