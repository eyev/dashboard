import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { GaugeChart } from './gauge-chart.model';
import { GaugeChartStore } from './gauge-chart.store';

@Injectable({ providedIn: 'root' })
export class GaugeChartService {
  constructor(
    private gaugeChartStore: GaugeChartStore,
    private http: HttpClient,
  ) {}

  get(url: string): Observable<void> {
    this.gaugeChartStore.setLoading(true);
    return this.http.get<GaugeChart[]>(url).pipe(
      tap(() => this.gaugeChartStore.setLoading(false)),
      map(chartData => this.gaugeChartStore.set(chartData)),
      catchError(err => throwError(err)),
    );
  }
}
