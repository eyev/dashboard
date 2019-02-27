import { Injectable } from '@angular/core';

import { EntityState, EntityStore, StoreConfig, guid } from '@datorama/akita';

import { GaugeChart } from './gauge-chart.model';

export interface GaugeChartState extends EntityState<GaugeChart> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'gauge-chart', idKey: 'name' })
export class GaugeChartStore extends EntityStore<GaugeChartState, GaugeChart> {
  constructor() {
    super([], { storeName: `gauge-chart-${guid()}` });
  }
}
