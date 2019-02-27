import { animate, style, transition, trigger } from '@angular/animations';

export const slideInRight = trigger('slideInRight', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('220ms ease-in', style({ transform: 'translateX(0%)' })),
  ]),
  transition(':leave', [
    animate('220ms ease-in', style({ transform: 'translateX(-100%)' })),
  ]),
]);
