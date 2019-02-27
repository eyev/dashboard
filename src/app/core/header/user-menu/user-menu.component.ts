import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'eyev-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent {
  isActive = false;

  toggleUserMenu(state?: boolean) {
    if (state) {
      this.isActive = state;
    }
    this.isActive = !this.isActive;
  }
}
