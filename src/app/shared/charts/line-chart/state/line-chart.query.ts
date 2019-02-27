import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { LineChartStore, LineChartState } from './line-chart.store';
import { LineChart } from './line-chart.model';

@Injectable({
  providedIn: 'root'
})
export class LineChartQuery extends QueryEntity<LineChartState, LineChart> {

  constructor(protected store: LineChartStore) {
    super(store);
  }

}
