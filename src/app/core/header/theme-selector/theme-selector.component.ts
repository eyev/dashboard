import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Theme } from '@app/core/header/theme-selector/state/theme.model';
import { ThemesQuery } from '@app/core/header/theme-selector/state/themes.query';
import { ThemesService } from '@app/core/header/theme-selector/state/themes.service';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'eyev-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSelectorComponent implements OnInit {
  isActive = false;
  themes: Observable<Theme[]> = of([]);
  activeThemeId: Observable<string> = of();
  constructor(
    private themesQuery: ThemesQuery,
    private themesService: ThemesService,
  ) {}

  ngOnInit() {
    this.themes = this.themesQuery.selectAll();
    this.activeThemeId = this.themesQuery.selectActiveId();
  }

  toggleThemeSelector(state?: boolean) {
    if (state) {
      this.isActive = state;
    }
    this.isActive = !this.isActive;
  }

  onSelectTheme(theme: Theme) {
    this.themesService.setTheme(theme);
  }
}
