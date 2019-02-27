import { Component, OnInit } from '@angular/core';

import { ChartCardConfig } from '@app/shared/chart-card/chart-card.model';

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
  cards: ChartCardConfig[] = [
    {
      title: 'Earnings',
      type: 'earnings',
      value: '$30,200',
      timeFrame: 'Past 7 days',
      data: [
        {
          name: 'Overall Earnings',
          series: [
            {
              name: '2/1/2019',
              value: 23032,
            },
            {
              name: '2/2/2019',
              value: 22213,
            },
            {
              name: '2/3/2019',
              value: 23615,
            },
            {
              name: '2/4/2019',
              value: 23732,
            },
            {
              name: '2/5/2019',
              value: 23213,
            },
            {
              name: '2/6/2019',
              value: 24615,
            },
            {
              name: '2/7/2019',
              value: 25615,
            },
          ],
        },
      ],
    },
    {
      title: 'New Users',
      type: 'users',
      value: '301',
      timeFrame: 'Past 7 days',
      data: [
        {
          name: 'New Memberships',
          series: [
            {
              name: '2/1/2019',
              value: 32,
            },
            {
              name: '2/2/2019',
              value: 123,
            },
            {
              name: '2/3/2019',
              value: 146,
            },
            {
              name: '2/4/2019',
              value: 132,
            },
            {
              name: '2/5/2019',
              value: 143,
            },
            {
              name: '2/6/2019',
              value: 150,
            },
            {
              name: '2/7/2019',
              value: 148,
            },
          ],
        },
      ],
    },
    {
      title: 'Open Tickets',
      type: 'support',
      value: '876',
      timeFrame: 'Current',
      data: [
        {
          name: 'Open Tickets',
          series: [
            {
              name: '2/1/2019',
              value: 880,
            },
            {
              name: '2/2/2019',
              value: 850,
            },
            {
              name: '2/3/2019',
              value: 876,
            },
          ],
        },
      ],
    },
    {
      title: 'New Orders',
      type: 'ecommerce',
      value: '1223',
      timeFrame: 'Today',
      data: [
        {
          name: 'New Orders',
          series: [
            {
              name: '1/24/2019',
              value: 1355,
            },
            {
              name: '2/1/2019',
              value: 1335,
            },
            {
              name: '2/8/2019',
              value: 1223,
            },
          ],
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit() {
    this.lineChartOptions = this.lineCharts[0];
  }

  toggleLineChart(category: string) {
    this.lineChartOptions = this.lineCharts.filter(
      chart => chart.type === category,
    )[0];
  }
}
