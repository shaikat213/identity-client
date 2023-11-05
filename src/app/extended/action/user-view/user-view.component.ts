
import { IdentityUserDto } from '@abp/ng.identity';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent {
  isUserQuickViewVisible: boolean;
  newPassword: string;
  user: IdentityUserDto;

  openUserQuickView(record: IdentityUserDto) {
    this.user = new Proxy(record, {
      get: (target, prop) => target[prop] || '—',
    });
    this.isUserQuickViewVisible = true;
  }
}

