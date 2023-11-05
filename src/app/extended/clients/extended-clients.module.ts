import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtendedClientsComponent } from './extended-clients.component';
import { ExtendedClientsRoutingModule } from './extended-clients-routing.module';
import { UiExtensionsModule } from '@abp/ng.theme.shared/extensions';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExtendedClientsComponent],
  imports: [
    CommonModule,
    FormsModule,
    UiExtensionsModule,
    ExtendedClientsRoutingModule
  ],
  exports: [ExtendedClientsComponent],
})
export class ExtendedClientsModule { }
