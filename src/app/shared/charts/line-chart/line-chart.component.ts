import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';

import { LineChart } from '@app/shared/charts/line-chart/state/line-chart.model';
import { LineChartQuery } from '@app/shared/charts/line-chart/state/line-chart.query';
import { LineChartService } from '@app/shared/charts/line-chart/state/line-chart.service';
import { LineChartStore } from '@app/shared/charts/line-chart/state/line-chart.store';

import * as shape from 'd3-shape';
import { of } from 'rxjs';

@Component({
  selector: 'eyev-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LineChartQuery, LineChartStore, LineChartService],
})
export class LineChartComponent implements OnChanges {
  @Input() url: string = '';
  @Input() title = '';
  @Input() timeFrame = '';
  chartData = of<LineChart[]>();
  isLoading = of<boolean>();
  curve = shape.curveCardinal;
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
    private query: LineChartQuery,
    private service: LineChartService,
  ) {}

  ngOnChanges() {
    this.isLoading = this.query.selectLoading();
    this.chartData = this.query.selectAll();
    console.log('changes');
    if (!this.url) {
      return;
    }
    this.service.get(this.url).subscribe();
  }
}
