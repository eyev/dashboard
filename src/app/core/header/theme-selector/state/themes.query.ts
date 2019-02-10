import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ThemesStore, ThemesState } from './themes.store';
import { Theme } from './theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemesQuery extends QueryEntity<ThemesState, Theme> {

  constructor(protected store: ThemesStore) {
    super(store);
  }

}
