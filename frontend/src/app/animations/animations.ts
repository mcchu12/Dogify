import { trigger, state, style, animate, transition, keyframes, query, animateChild, group, sequence } from '@angular/animations';

export function fade() {
  return trigger('fade', [
    transition(':enter', [
      style({opacity: 0}),
      sequence([
        animate('500ms ease-in-out', style({opacity: 1})),
        query('.hero-title', animateChild(), { optional: true }),
        query('.main', sequence([
          animate('0s', style({backgroundColor: 'transparent'})),
          animateChild(),
        ])),
      ])
    ]),
    transition(':leave', [
      animate('200ms', style({opacity: 0}))
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
