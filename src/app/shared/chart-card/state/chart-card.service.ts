import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ChartCard } from './chart-card.model';
import { ChartCardStore } from './chart-card.store';

@Injectable({ providedIn: 'root' })
export class ChartCardService {
  constructor(
    private chartCardStore: ChartCardStore,
    private http: HttpClient,
  ) {}

  get(url: string) {
    this.chartCardStore.setLoading(true);
    return this.http.get<ChartCard[]>(url).pipe(
      tap(() => this.chartCardStore.setLoading(false)),
      map(chartData => this.chartCardStore.set(chartData)),
      catchError(err => throwError(err)),
    );
  }
}
