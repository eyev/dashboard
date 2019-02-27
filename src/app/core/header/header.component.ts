import { ChangeDetectionStrategy, Component } from '@angular/core';

import { slideInRight } from '@app/shared/animation-library';

@Component({
  selector: 'eyev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInRight],
})
export class HeaderComponent {
  isSidenavOpen = false;
  constructor() {}

  toggleMenu(state?: boolean) {
    if (!state) {
      this.isSidenavOpen = !this.isSidenavOpen;
      return;
    }
    this.isSidenavOpen = state;
  }
}
