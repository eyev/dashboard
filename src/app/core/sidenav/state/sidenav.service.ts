import { Injectable } from '@angular/core';

import {
  SidenavState,
  SidenavStore,
} from '@app/core/sidenav/state/sidenav.store';

@Injectable({ providedIn: 'root' })
export class SidenavService {
  constructor(private sidenavStore: SidenavStore) {}

  set(params: Partial<SidenavState>) {
    this.sidenavStore.update(state => ({
      ...state,
      params,
    }));
  }

  toggle() {
    this.sidenavStore.update(state => ({
      ...state,
      isOpen: !state.isOpen,
    }));
  }
}
