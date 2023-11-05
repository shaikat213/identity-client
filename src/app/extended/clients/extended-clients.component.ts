
import { HttpWaitService, ListService, PagedResultDto } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import {
  Component,
  Injector,
  OnInit,
  TemplateRef,
  TrackByFunction,
  ViewChild,
} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { ClientDto } from './../../proxy/dto-models/models';
import { ClientInputDto } from '@proxy/input-dtos';
import { ClientService } from '@proxy';

@Component({
  selector: 'app-extended-clients',
  templateUrl: './extended-clients.component.html',
  styleUrls: ['./extended-clients.component.scss'],
  providers: [ListService],
})
export class ExtendedClientsComponent implements OnInit {
  // data: PagedResultDto<ClientDto> = { items: [], totalCount: 0 };

  // @ViewChild('modalContent', { static: false })
  // modalContent: TemplateRef<any>;

  form: FormGroup;

  selected: ClientDto;
  clients: ClientDto[] = [];

  // visiblePermissions = false;

  // providerKey: string;

  // isModalVisible: boolean;

  // modalBusy = false;

  // trackByFn: TrackByFunction<AbstractControl> = (index, item) => Object.keys(item)[0] || index;

  // onVisiblePermissionChange = event => {
  //   this.visiblePermissions = event;
  // };

  public readonly list: ListService<ClientInputDto>;

  constructor(
    protected confirmationService: ConfirmationService,
    protected clientService: ClientService,
    protected fb: FormBuilder,
    protected injector: Injector,
  ) {}

  ngOnInit() {
    this.hookToQuery();
  }

  // buildForm() {
  //   const data = new FormPropData(this.injector, this.selected);
  //   this.form = generateFormFromProps(data);
  // }

  // openModal() {
  //   this.buildForm();
  //   this.isModalVisible = true;
  // }

  add() {
    this.selected = {} as ClientDto;
    //this.openModal();
  }

  edit(id: string) {
    this.clientService
      .getByClientId(id)
      .subscribe(_client=>
        {
          this.selected = _client
          //this.openModal();
        });
  }

  save() {
    // if (!this.form.valid || this.modalBusy) return;
    // this.modalBusy = true;

    // const { roleNames = [] } = this.form.value;
    // const mappedRoleNames =
    //   roleNames.filter(role => !!role[Object.keys(role)[0]]).map(role => Object.keys(role)[0]) ||
    //   [];

    // const { id } = this.selected;

    // (id
    //   ? this.clientService.update(undefined) //ClientInputDto
    //   : this.clientService.create({ ...this.form.value, roleNames: mappedRoleNames })
    // )
    //   .pipe(finalize(() => (this.modalBusy = false)))
    //   .subscribe(() => {
    //     this.isModalVisible = false;
    //     this.list.get();
    //   });
  }

  delete(id: string, userName: string) {
    this.confirmationService
      .warn('AbpIdentity::UserDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
        messageLocalizationParams: [userName],
      })
      .subscribe((status: Confirmation.Status) => {
        if (status === Confirmation.Status.confirm) {
          //this.clientService.delete(id).subscribe(() => this.list.get());
        }
      });
  }

  // sort(data) {
  //   const { prop, dir } = data.sorts[0];
  //   this.list.sortKey = prop;
  //   this.list.sortOrder = dir;
  // }

  private hookToQuery() {
    this.clientService.getList().subscribe(clients => {
        this.clients = clients;
        console.log(clients);
        // var data = { items: clients, totalCount: clients.length }
        // this.data = data;
      });
    //this.list.hookToQuery(query => this.clientService.getList(query)).subscribe(res => (this.data = res));
  }

  openPermissionsModal(providerKey: string) {
    // this.providerKey = providerKey;
    // setTimeout(() => {
    //   this.visiblePermissions = true;
    // }, 0);
  }
}
