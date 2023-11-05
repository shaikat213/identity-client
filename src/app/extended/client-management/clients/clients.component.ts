import { ListService, PagedResultDto } from '@abp/ng.core';
import { eFeatureManagementComponents } from '@abp/ng.feature-management';
import {Confirmation, ConfirmationService, ToasterService} from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '@proxy/client.service';
import { ClientDto } from '@proxy/dto-models';
import { GetClientsInput } from '@proxy/input-dtos';
import { finalize } from 'rxjs/operators';
import { eClientManagementComponents } from '../enums';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eClientManagementComponents.Clients,
    },
  ],
})
export class ClientsComponent implements OnInit {
  data: PagedResultDto<ClientDto> = { items: [], totalCount: 0 };

  selected!: ClientDto;

  clientForm!: FormGroup;

  isModalVisible!: boolean;

  visibleFeatures = false;

  providerKey!: string;

  modalBusy = false;

  featureManagementKey = eFeatureManagementComponents.FeatureManagement;

  get hasSelectedClient(): boolean {
    return Boolean(this.selected.id);
  }

  onVisibleFeaturesChange = (value: boolean) => {
    this.visibleFeatures = value;
  };

  constructor(
    public readonly list: ListService<GetClientsInput>,
    private injector: Injector,
    private confirmationService: ConfirmationService,
    private service: ClientService,
    private toasterService: ToasterService,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.hookToQuery();
  }

  private createClientForm() {
    const data = new FormPropData(this.injector, this.selected);
    this.clientForm = generateFormFromProps(data);
  }

  addClient() {
    this.selected = {} as ClientDto;
    this.createClientForm();
    this.isModalVisible = true;
  }

  editClient(id: string) {
    this.service.get(id).subscribe(res => {
      this.selected = res;
      this.createClientForm();
      this.isModalVisible = true;
    });
  }

  save() {
    if (!this.clientForm.valid || this.modalBusy) return;
    this.modalBusy = true;

    const { id } = this.selected;

    (id
      ? this.service.update({ ...this.selected, ...this.clientForm.value }) //this.service.update(id, { ...this.selected, ...this.clientForm.value })
      : this.service.create(this.clientForm.value)
    )
      .pipe(finalize(() => (this.modalBusy = false)))
      .subscribe(() => {
        this.isModalVisible = false;
        this.list.get();
      });
  }

  delete(id: string, name: string) {
    this.confirmationService
      .warn(
        'AbpClientManagement::ClientDeletionConfirmationMessage',
        'AbpClientManagement::AreYouSure',
        {
          messageLocalizationParams: [name],
        },
      )
      .subscribe((status: Confirmation.Status) => {
        if (status === Confirmation.Status.confirm) {
          this.toasterService.success('AbpUi::SuccessfullyDeleted');
          this.service.delete(id).subscribe(() => this.list.get());
        }
      });
  }

  hookToQuery() {
    this.list
      .hookToQuery(query => this.service.getListByClientsInput(query))
      .subscribe(response => {
        this.data = response;
      });
  }

  onSharedDatabaseChange(value: boolean) {
    if (!value) {
      setTimeout(() => {
        const defaultConnectionString = document.getElementById(
          'defaultConnectionString',
        ) as HTMLInputElement;
        if (defaultConnectionString) {
          defaultConnectionString.focus();
        }
      }, 0);
    }
  }

  openFeaturesModal(providerKey: string) {
    this.providerKey = providerKey;
    setTimeout(() => {
      this.visibleFeatures = true;
    }, 0);
  }

  sort(data: any) {
    const { prop, dir } = data.sorts[0];
    this.list.sortKey = prop;
    this.list.sortOrder = dir;
  }
}
