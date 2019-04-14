import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SidenavStore, SidenavState } from './sidenav.store';

@Injectable({ providedIn: 'root' })
export class SidenavQuery extends Query<SidenavState> {

  constructor(protected store: SidenavStore) {
    super(store);
  }

}
