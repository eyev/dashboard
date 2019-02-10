import { Component, Inject } from '@angular/core';

import { ThemesService } from '@app/core/header/theme-selector/state/themes.service';
import { WINDOW } from '@app/shared/utility/window.service';

@Component({
  selector: 'eyev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(themeService: ThemesService, @Inject(WINDOW) window: Window) {
    themeService.init();
    const theme = window.localStorage.getItem('app-theme');
    if (!theme) {
      themeService.setActive('default');
      return;
    }
    themeService.setTheme(JSON.parse(theme));
  }
}
