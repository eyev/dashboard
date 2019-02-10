import { Injectable } from '@angular/core';

import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { Theme } from './theme.model';

export interface ThemesState extends EntityState<Theme> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'themes', idKey: 'codeName' })
export class ThemesStore extends EntityStore<ThemesState, Theme> {
  constructor() {
    super();
  }
}
