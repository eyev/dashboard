import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';

import { GaugeChart } from '@app/shared/charts/gauge-chart/state/gauge-chart.model';
import { GaugeChartQuery } from '@app/shared/charts/gauge-chart/state/gauge-chart.query';
import { GaugeChartService } from '@app/shared/charts/gauge-chart/state/gauge-chart.service';
import { GaugeChartStore } from '@app/shared/charts/gauge-chart/state/gauge-chart.store';

import { of } from 'rxjs';

@Component({
  selector: 'eyev-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GaugeChartQuery, GaugeChartService, GaugeChartStore],
})
export class GaugeChartComponent implements OnChanges {
  @Input() url = '';
  @Input() title = '';
  @Input() timeFrame = '';
  isLoading = of<boolean>();
  chartData = of<GaugeChart[]>();
  scheme = {
    domain: [
      'hsl(340, 82%, 52%)',
      'hsl(218, 100%, 63%)',
      'hsl(152, 89%, 39%)',
      'hsl(283, 65%, 46%)',
      'hsl(49, 64%, 43%)',
    ],
  };

  constructor(
    private query: GaugeChartQuery,
    private service: GaugeChartService,
  ) {}

  ngOnChanges() {
    this.isLoading = this.query.selectLoading();
    this.chartData = this.query.selectAll();
    if (!this.url) {
      return;
    }
    this.service.get(this.url).subscribe();
  }
}
