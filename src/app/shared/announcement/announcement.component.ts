import { Component, Input } from '@angular/core';

import { slideInRight } from '@app/shared/animation-library';
import { Announcement } from '@app/shared/announcement/state/announcement.model';

@Component({
  selector: 'eyev-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
  animations: [slideInRight],
})
export class AnnouncementComponent {
  @Input() announcement: Announcement = {
    id: 0,
    author: '',
    message: '',
    position: '',
    avatar: '',
    time: '',
  };
  isVisible = true;
  hideCard() {
    this.isVisible = false;
  }
}
