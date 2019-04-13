import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ChartCardStore, ChartCardState } from './chart-card.store';
import { ChartCard } from './chart-card.model';

@Injectable({
  providedIn: 'root'
})
export class ChartCardQuery extends QueryEntity<ChartCardState, ChartCard> {

  constructor(protected store: ChartCardStore) {
    super(store);
  }

}
