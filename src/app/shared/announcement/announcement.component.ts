import { Component, Input, OnInit } from '@angular/core';

import { Announcement } from '@app/shared/announcement/state/announcement.model';

@Component({
  selector: 'eyev-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
})
export class AnnouncementComponent implements OnInit {
  @Input() announcement: Announcement = {
    id: 0,
    author: '',
    message: '',
    position: '',
    avatar: '',
    time: '',
  };
  constructor() {}

  ngOnInit() {}
}
