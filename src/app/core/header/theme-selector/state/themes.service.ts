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

  /**
   * Based off of https://github.com/maychan111/ng-multi-bootstrap-themes
   */
  private toggleTheme(theme: Theme) {
    if (theme && this.getThemeLink(theme)) {
      const links = this.window.document.getElementsByTagName('link');
      for (var i = 0; i < links.length; i++) {
        const link = links[i];
        if (link.rel.indexOf('stylesheet') != -1 && link.title) {
          if (link.title === theme.codeName) {
            link.disabled = false;
          } else {
            link.disabled = true;
          }
        }
      }
    }
  }

  private getThemeLink(theme: Theme) {
    const links = this.window.document.getElementsByTagName('link');
    for (var i = 0; i < links.length; i++) {
      if (
        links[i].rel.indexOf('stylesheet') != -1 &&
        links[i].title === theme.codeName
      ) {
        return true;
      }
    }
    return false;
  }
}
