import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Announcement } from '@app/shared/announcement/state/announcement.model';
import { AnnouncementStore } from '@app/shared/announcement/state/announcement.store';
import { ChartCard } from '@app/shared/chart-card/state/chart-card.model';
import { ChartCardStore } from '@app/shared/chart-card/state/chart-card.store';

import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HomeService {
  constructor(
    private http: HttpClient,
    private chartCardStore: ChartCardStore,
    private announcementStore: AnnouncementStore,
  ) {}

  getCards() {
    this.chartCardStore.setLoading(true);
    return this.http
      .get<ChartCard[]>('/assets/mock-data/dashboard-card-data.json')
      .pipe(
        tap(() => this.chartCardStore.setLoading(false)),
        map(chartData => this.chartCardStore.set(chartData)),
        catchError(err => throwError(err)),
      );
  }

  getNotifications() {
    this.announcementStore.setLoading(true);
    return this.http
      .get<Announcement[]>('/assets/mock-data/announcements.json')
      .pipe(
        tap(() => this.announcementStore.setLoading(false)),
        map(announcements => this.announcementStore.set(announcements)),
        catchError(err => throwError(err)),
      );
  }
}
