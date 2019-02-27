import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'eyev-notifications-icon',
  templateUrl: './notifications-icon.component.html',
  styleUrls: ['./notifications-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsIconComponent implements OnInit {
  isActive = false;
  constructor() {}

  ngOnInit() {}
  toggleNotificationsMenu(state?: boolean) {
    if (state) {
      this.isActive = state;
    }
    this.isActive = !this.isActive;
  }
}
