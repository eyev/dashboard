import { Inject, Injectable } from '@angular/core';

import { Theme } from '@app/core/header/theme-selector/state/theme.model';
import { APP_THEMES } from '@app/core/header/theme-selector/state/themes';
import { WINDOW } from '@app/shared/utility/window.service';

import { ThemesStore } from './themes.store';

@Injectable({ providedIn: 'root' })
export class ThemesService {
  constructor(
    private themesStore: ThemesStore,
    @Inject(WINDOW) private window: Window,
  ) {}

  init() {
    this.themesStore.set(APP_THEMES);
  }
  setActive(codeName: string) {
    this.themesStore.setActive(codeName);
  }

  setTheme(theme: Theme) {
    this.window.localStorage.setItem('app-theme', JSON.stringify(theme));
    this.toggleTheme(theme);
    this.setActive(theme.codeName);
  }

  private toggleTheme(theme: Theme) {
    if (!theme) {
      return;
    }
    const links = Array.from(this.window.document.getElementsByTagName('link'));
    links.map(link => {
      if (!link.title) {
        return link;
      }
      if (link.title === theme.codeName) {
        link.disabled = false;
      }

      setTimeout(() => {
        if (link.title !== theme.codeName) {
          link.disabled = true;
        }
      }, 10);
    });
  }
}
