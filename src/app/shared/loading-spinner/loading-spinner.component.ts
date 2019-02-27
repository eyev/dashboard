import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'eyev-loading-spinner',
  template: `
    <img
      src="/assets/images/tail-spin.svg"
      style="width: 100%; height: 100%;"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingSpinnerComponent {
  constructor() {}
}
