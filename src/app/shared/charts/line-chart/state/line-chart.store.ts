import { Injectable } from '@angular/core';

import { EntityState, EntityStore, StoreConfig, guid } from '@datorama/akita';

import { LineChart } from './line-chart.model';

export interface LineChartState extends EntityState<LineChart> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'line-chart', idKey: 'name' })
export class LineChartStore extends EntityStore<LineChartState, LineChart> {
  constructor() {
    super([], { storeName: `line-chart-${guid()}` });
  }
}
