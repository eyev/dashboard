import { Injectable } from '@angular/core';

import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { ChartCard } from './chart-card.model';

export interface ChartCardState extends EntityState<ChartCard> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'chart-card', idKey: 'title' })
export class ChartCardStore extends EntityStore<ChartCardState, ChartCard> {
  constructor() {
    super();
  }
}
