import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { SidenavQuery } from '@app/core/sidenav/state/sidenav.query';
import { SidenavService } from '@app/core/sidenav/state/sidenav.service';
import { SidenavState } from '@app/core/sidenav/state/sidenav.store';

import { of } from 'rxjs';

@Component({
  selector: 'eyev-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
  sidenavState = of<SidenavState>();
  constructor(
    private sidenavQuery: SidenavQuery,
    private sidenavService: SidenavService,
  ) {}

  ngOnInit() {
    this.sidenavState = this.sidenavQuery.select();
  }
  toggle() {
    this.sidenavService.toggle();
  }
}
