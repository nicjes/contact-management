import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
    <h1><i class="far fa-address-book"></i>   Kontaktverwaltung</h1>
    </header>
  `,
  styleUrls: [ './header.component.scss' ],
})
export class HeaderComponent {
  constructor() {}
}
