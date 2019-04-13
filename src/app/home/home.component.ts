import { Component, OnInit } from '@angular/core';

import { HomeService } from '@app/home/home.service';
import { Announcement } from '@app/shared/announcement/state/announcement.model';
import { AnnouncementQuery } from '@app/shared/announcement/state/announcement.query';
import { ChartCardConfig } from '@app/shared/chart-card/chart-card.model';
import { ChartCardQuery } from '@app/shared/chart-card/state/chart-card.query';

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
  announcements = of<Announcement[]>();
  constructor(
    private cardQuery: ChartCardQuery,
    private homeService: HomeService,
    private announcementQuery: AnnouncementQuery,
  ) {}

  ngOnInit() {
    this.lineChartOptions = this.lineCharts[0];
    this.homeService.getCards().subscribe();
    this.homeService.getNotifications().subscribe();
    this.cards = this.cardQuery.selectAll();
    this.announcements = this.announcementQuery.selectAll({
      limitTo: 2,
    });
  }

  toggleLineChart(category: string) {
    this.lineChartOptions = this.lineCharts.filter(
      chart => chart.type === category,
    )[0];
  }
}
