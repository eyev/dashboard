import { Injectable } from '@angular/core';

import { NAV_ITEMS, NavItem } from '@app/core/sidenav/nav-items';

import { Store, StoreConfig } from '@datorama/akita';

export interface SidenavState {
  isOpen: boolean;
  isVisible: boolean;
  items: NavItem[];
}

export function createInitialState(): SidenavState {
  return {
    isOpen: false,
    isVisible: true,
    items: NAV_ITEMS,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'sidenav' })
export class SidenavStore extends Store<SidenavState> {
  constructor() {
    super(createInitialState());
  }
}
