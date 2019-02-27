import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ChartCardConfig } from '@app/shared/chart-card/chart-card.model';

import * as shape from 'd3-shape';

@Component({
  selector: 'eyev-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartCardComponent {
  @Input() config: ChartCardConfig = {
    data: [],
    title: '',
    value: '',
    type: '',
    timeFrame: '',
  };

  constructor() {}

  scheme = {
    domain: ['#fff'],
  };
  curve = shape.curveCardinal;

  icons: { [key: string]: string } = {
    earnings: 'money-check-alt',
    users: 'user-plus',
    support: 'life-ring',
    ecommerce: 'shopping-cart',
  };
}
