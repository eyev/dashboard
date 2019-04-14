import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { installFontAwesomeIcons } from '@app/core/icon-library';
import { SharedModule } from '@app/shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { NotificationsIconComponent } from './header/notifications-icon/notifications-icon.component';
import { ThemeSelectorComponent } from './header/theme-selector/theme-selector.component';
import { UserMenuComponent } from './header/user-menu/user-menu.component';
import { SidenavItemComponent } from './sidenav/sidenav-item/sidenav-item.component';
import { SidenavComponent } from './sidenav/sidenav.component';

installFontAwesomeIcons();
@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    ThemeSelectorComponent,
    NotificationsIconComponent,
    UserMenuComponent,
    SidenavItemComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [HeaderComponent, SidenavComponent],
})
export class CoreModule {}
