import { trigger, state, style, animate, transition, keyframes, query, animateChild, group, sequence } from '@angular/animations';

export function fade() {
  return trigger('fade', [
    transition(':enter', [
      style({opacity: 0}),
      group([
        sequence([
          animate('500ms ease-in-out', style({opacity: 1})),
          query('.hero-title', animateChild(), { optional: true }),
          query('.main', animateChild()),
        ])
      ])
    ]),
    transition(':leave', [
      animate('200ms', style({opacity: 0}))
    ])
  ]);
}

export function bounceIn() {
  return trigger('bounceIn', [
    transition(':enter', [
      animate('0.75s cubic-bezier(0.215, 0.61, 0.355, 1)', keyframes([
        style({opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)'}),
        style({transform: 'scale3d(0.9, 0.9, 0.9)'}),
        style({opacity: 1, transform: 'scale3d(1.03, 1.03, 1.03)'}),
        style({transform: 'scale3d(0.97, 0.97, 0.97)'}),
        style({transform: 'scale3d(0.9, 0.9, 0.9)'}),
        style({opacity: 1, transform: 'scale3d(1, 1, 1)'}),
      ]))
    ])
  ]);
}

export function fadeInLeft() {
  return trigger('fadeInLeft', [
    state('*', style({
      opacity: 1,
    })),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-10%)'
      }),
      animate('500ms 50ms cubic-bezier(0.35, 0, 0.25, 1)')
      ])
  ]);
}
