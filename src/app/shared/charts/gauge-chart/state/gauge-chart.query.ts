import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GaugeChartStore, GaugeChartState } from './gauge-chart.store';
import { GaugeChart } from './gauge-chart.model';

@Injectable({
  providedIn: 'root'
})
export class GaugeChartQuery extends QueryEntity<GaugeChartState, GaugeChart> {

  constructor(protected store: GaugeChartStore) {
    super(store);
  }

}
