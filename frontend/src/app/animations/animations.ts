import { trigger, state, style, animate, transition, keyframes, query, animateChild, group } from '@angular/animations';

export function fade() {
  return trigger('fade', [
    state('*', style({
      opacity: 1
    })),
    transition(':enter', [
      style({opacity: 0}),
      group([
        animate('1s ease-in-out'),
        query('@bounceIn', animateChild())
      ]),
    ])
  ]);
}

export function expand() {
  return trigger('expand', [
    state('*', style({
      opacity: 1,
      transform: 'translateY(0)'
    })),
    transition(':enter', [
      style({transform: 'translateY(-50%)', opacity: 0}),
      animate('200ms ease-in')
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

export function slideInUp() {
  return trigger('slideInUp', [
    state('*', style({
      opacity: 1,
      transform: 'translate3d(0, 0, 0)'
    })),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translate3d(0, 100%, 0)'
      }),
      animate('1s')
      ])
  ]);
}
