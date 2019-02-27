import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { installFontAwesomeIcons } from '@app/core/icon-library';
import { SharedModule } from '@app/shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { NotificationsIconComponent } from './header/notifications-icon/notifications-icon.component';
import { ThemeSelectorComponent } from './header/theme-selector/theme-selector.component';
import { UserMenuComponent } from './header/user-menu/user-menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';

installFontAwesomeIcons();
@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    ThemeSelectorComponent,
    NotificationsIconComponent,
    UserMenuComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, SidenavComponent],
})
export class CoreModule {}
