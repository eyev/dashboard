import { isPlatformBrowser } from '@angular/common';
import {
  FactoryProvider,
  Injectable,
  InjectionToken,
  PLATFORM_ID,
} from '@angular/core';

// Adapted from https://brianflove.com/2018/01/11/angular-window-provider/ by @seangwright
export const WINDOW = new InjectionToken('WindowToken');

export abstract class WindowRef {
  get nativeWindow(): Window {
    throw new Error('Not implemented.');
  }
}

@Injectable({
  providedIn: 'root',
})
export class BrowserWindowRef extends WindowRef {
  constructor() {
    super();
  }

  get nativeWindow(): Window {
    return window;
  }
}

@Injectable({
  providedIn: 'root',
})
export class NodeWindowRef extends WindowRef {
  constructor() {
    super();
  }

  get nativeWindow(): Window {
    return {} as any;
  }
}

export function windowFactory(
  browserWindowRef: BrowserWindowRef,
  nodeWindowRef: NodeWindowRef,
  platformId: object,
): Window | object {
  if (isPlatformBrowser(platformId)) {
    return browserWindowRef.nativeWindow;
  }
  return nodeWindowRef.nativeWindow;
}

export const windowProvider: FactoryProvider = {
  provide: WINDOW,
  useFactory: windowFactory,
  deps: [BrowserWindowRef, NodeWindowRef, PLATFORM_ID],
};
