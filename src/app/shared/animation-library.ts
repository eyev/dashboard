import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideInRight = trigger('slideInRight', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('220ms ease-in', style({ transform: 'translateX(0%)' })),
  ]),
  transition(':leave', [
    animate('220ms ease-in', style({ transform: 'translateX(-100%)' })),
  ]),
]);
export const slideInLeft = trigger('slideInLeft', [
  transition(':enter', [
    style({ transform: 'translateX(200%)' }),
    animate('300ms ease-in', style({ transform: 'translateX(0%)' })),
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateX(200%)' })),
  ]),
]);
export const fadeIn = trigger('fadeIn', [
  state('in', style({ opacity: 1 })),
  transition(':enter', [style({ opacity: 0 }), animate(300)]),
  transition(':leave', animate(300, style({ opacity: 0 }))),
]);
