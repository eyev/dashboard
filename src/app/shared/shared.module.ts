import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxSubscribeDirective } from '@app/shared/utility/ngx-subscribe.directive';
import { windowProvider } from '@app/shared/utility/window.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AnnouncementComponent } from './announcement/announcement.component';
import { ChartCardComponent } from './chart-card/chart-card.component';
import { GaugeChartComponent } from './charts/gauge-chart/gauge-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    ChartCardComponent,
    LineChartComponent,
    GaugeChartComponent,
    LoadingSpinnerComponent,
    AnnouncementComponent,
    NgxSubscribeDirective,
  ],
  imports: [CommonModule, FontAwesomeModule, NgxChartsModule],
  exports: [
    FontAwesomeModule,
    NgxChartsModule,
    ChartCardComponent,
    LineChartComponent,
    GaugeChartComponent,
    LoadingSpinnerComponent,
    AnnouncementComponent,
    NgxSubscribeDirective,
  ],
  providers: [windowProvider],
})
export class SharedModule {}
