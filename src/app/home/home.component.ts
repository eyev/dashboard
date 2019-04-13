import { Component, OnInit } from '@angular/core';

import { ChartCardConfig } from '@app/shared/chart-card/chart-card.model';
import { ChartCardQuery } from '@app/shared/chart-card/state/chart-card.query';
import { ChartCardService } from '@app/shared/chart-card/state/chart-card.service';

import { of } from 'rxjs';

@Component({
  selector: 'eyev-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lineChartOptions: { type: string; url: string; title: string } = {
    type: '',
    url: '',
    title: '',
  };
  lineCharts = [
    {
      type: 'impressions',
      url: '/assets/mock-data/impressions-chart-data.json',
      title: 'Impressions',
    },
    {
      type: 'conversions',
      url: '/assets/mock-data/conversions-chart-data.json',
      title: 'Conversions',
    },
    {
      type: 'email-subscriptions',
      url: '/assets/mock-data/email-subscriptions-chart-data.json',
      title: 'Email Subscriptions',
    },
  ];
  cards = of<ChartCardConfig[]>();
  constructor(
    private cardService: ChartCardService,
    private cardQuery: ChartCardQuery,
  ) {}

  ngOnInit() {
    this.lineChartOptions = this.lineCharts[0];
    this.cardService
      .get('/assets/mock-data/dashboard-card-data.json')
      .subscribe();
    this.cards = this.cardQuery.selectAll();
  }

  toggleLineChart(category: string) {
    this.lineChartOptions = this.lineCharts.filter(
      chart => chart.type === category,
    )[0];
  }
}
