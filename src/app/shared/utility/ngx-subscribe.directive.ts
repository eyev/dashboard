/**
 * Sourced from https://stackblitz.com/github/wardbell/ngx-subscribe
 */
// tslint:disable:max-classes-per-file
import {
  ChangeDetectorRef,
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { EMPTY, Observable, Subscription, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export class NgxSubscribeContext {
  public $implicit: any = null;
  public ngxSubscribe: any = null;
}

@Directive({
  selector: '[ngxSubscribe]',
})
export class NgxSubscribeDirective implements OnInit, OnDestroy {
  private observable!:
    | Observable<any>
    | Array<Observable<any>>
    | { [key: string]: Observable<any> };
  private context: NgxSubscribeContext = new NgxSubscribeContext();
  private subscription!: Subscription;

  @Input()
  set ngxSubscribe(
    inputObservable:
      | Observable<any>
      | Array<Observable<any>>
      | { [key: string]: Observable<any> },
  ) {
    if (this.observable === inputObservable) {
      return;
    }

    this.observable = inputObservable;

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.context.ngxSubscribe = undefined;

    let innerObservable: Observable<any>;

    if (!inputObservable) {
      innerObservable = EMPTY;
    } else if (Array.isArray(inputObservable)) {
      // assume it is an array of observables.
      // emits only after all observables have emitted once
      innerObservable = combineLatest(inputObservable).pipe(startWith([]));
    } else if (inputObservable instanceof Observable) {
      // assume it's an observable because it looks like one
      innerObservable = inputObservable;
    } else {
      // assume it is an object with observable properties
      const { result, keys } = Object.keys(inputObservable).reduce<{
        result: { [key: string]: any };
        keys: string[];
        observables: Array<Observable<any>>;
      }>(
        (acc, k) => {
          const observable = inputObservable[k];
          if (observable.subscribe) {
            // assume is observable because looks like one
            acc.observables.push(observable);
            acc.keys.push(k);
          } else {
            // assume this property is a static value.
            // will not change, even if you mutate inputObservable[k]
            acc.result[k] = observable;
          }
          return acc;
        },
        {
          result: {},
          keys: [],
          observables: [],
        },
      );

      // no observable properties emit until each have emitted once.
      innerObservable = combineLatest(keys.map(k => inputObservable[k])).pipe(
        map(values =>
          keys.reduce((acc, k, i) => {
            acc[k] = values[i];
            return acc;
          }, result),
        ),
        startWith(result),
      );
    }

    this.subscription = innerObservable.subscribe(value => {
      this.context.ngxSubscribe = value;
      this.cdr.markForCheck();
    });
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private cdr: ChangeDetectorRef,
    private templateRef: TemplateRef<any>,
  ) {}

  ngOnInit() {
    this.viewContainer.createEmbeddedView(this.templateRef, this.context);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
