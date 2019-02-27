import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'eyev-notifications-icon',
  templateUrl: './notifications-icon.component.html',
  styleUrls: ['./notifications-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsIconComponent {
  isActive = false;

  toggleNotificationsMenu(state?: boolean) {
    if (state) {
      this.isActive = state;
    }
    this.isActive = !this.isActive;
  }
}
