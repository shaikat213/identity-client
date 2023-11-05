import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-extended-routes',
  templateUrl: './extended-routes.component.html',
  styleUrls: ['./extended-routes.component.scss']
})
export class ExtendedRoutesComponent {

  @HostBinding('class.mx-auto')
  marginAuto = true;

  get smallScreen() {
    return window.innerWidth < 992;
  }

}
