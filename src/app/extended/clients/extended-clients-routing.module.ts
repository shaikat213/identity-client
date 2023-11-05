import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtendedClientsComponent } from './extended-clients.component';

const routes: Routes = [{ path: 'clients', component: ExtendedClientsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtendedClientsRoutingModule {}
