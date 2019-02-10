import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { windowProvider } from '@app/shared/utility/window.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule],
  providers: [windowProvider],
})
export class SharedModule {}
