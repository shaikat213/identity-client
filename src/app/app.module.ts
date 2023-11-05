import { AccountConfigModule } from '@abp/ng.account/config';
import { CoreModule } from '@abp/ng.core';
import { registerLocale } from '@abp/ng.core/locale';
import { IdentityConfigModule } from '@abp/ng.identity/config';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';
import { TenantManagementConfigModule } from '@abp/ng.tenant-management/config';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { ExtendedLogoComponent } from './extended/logo/extended-logo.component';
import { SharedModule } from './shared/shared.module';
import { ExtendedNavItemsComponent } from './extended/nav-items/extended-nav-items.component';
import { ExtendedRolesModule } from './extended/roles/extended-roles.module';
import { ExtendedUsersModule } from './extended/users/extended-users.module';
import { ExtendedRoutesComponent } from './extended/routes/extended-routes.component';

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot({
      environment,
      registerLocaleFn: registerLocale(),
    }),
    ThemeSharedModule.forRoot(),
    AccountConfigModule.forRoot(),
    IdentityConfigModule.forRoot(),
    TenantManagementConfigModule.forRoot(),
    SettingManagementConfigModule.forRoot(),
    NgxsModule.forRoot(),
    ThemeBasicModule.forRoot(),
    ExtendedRolesModule,
    ExtendedUsersModule
  ],
  declarations: [
    AppComponent,
    ExtendedLogoComponent,
    ExtendedRoutesComponent,
    ExtendedNavItemsComponent
  ],
  providers: [APP_ROUTE_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
