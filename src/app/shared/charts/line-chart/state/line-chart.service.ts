import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { LineChart } from './line-chart.model';
import { LineChartStore } from './line-chart.store';

@Injectable({ providedIn: 'root' })
export class LineChartService {
  constructor(
    private lineChartStore: LineChartStore,
    private http: HttpClient,
  ) {}

  get(url: string): Observable<void> {
    this.lineChartStore.setLoading(true);
    return this.http.get<LineChart[]>(url).pipe(
      map(state => this.lineChartStore.set(state)),
      tap(() => this.lineChartStore.setLoading(false)),
    );
  }
}
