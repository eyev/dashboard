import { Component, Input } from '@angular/core';

import { NavItem } from '@app/core/sidenav/nav-items';

@Component({
  selector: 'eyev-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
})
export class SidenavItemComponent {
  @Input() navItem: NavItem = {
    name: '',
    route: [],
    icon: [],
  };
  @Input() isOpen = false;
}
