import { Component, OnInit, ViewChild, HostListener, Inject, EventEmitter, Output, ElementRef, HostBinding } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { trigger, state, sequence, animate, transition, style, query, stagger } from '@angular/animations';

import { faBars, faEllipsisV, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('navAnimation', [
      state('open', style({
        opacity: 1,
        width: '100%'
      })),
      state('closed', style({
        opacity: 0,
        width: 0
      })),
      transition('closed => open', [
        query('.sibling-fade a, .btn-close', style({ opacity: 0, transform: 'translateX(-10%)' })),
        sequence([
          animate('300ms ease-out', style({ opacity: 1, width: '100%' })),
          query('.sibling-fade a, .btn-close', stagger(100, animate('300ms ease-out', style({ opacity: 1, transform: 'none' }))))
        ])
      ]),
      transition('open => closed', [
        sequence([
          query('.sibling-fade a, .btn-close', [style({ opacity: 1 }), stagger(100, animate('300ms ease-out', style({ opacity: 0 })))]),
          animate('300ms ease-out', style({ opacity: 0, width: '0%' }))
        ])
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  @ViewChild('mobileNav') mobileNav: ElementRef;

  @Output() toggleEmitter = new EventEmitter();

  menuToggle = false;
  sidenavToggle = false;

  icMenu: IconDefinition;
  icMore: IconDefinition;

  navbarHeight: number;
  navScrolled: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.icMenu = faBars;
    this.icMore = faEllipsisV;
  }

  // Check if nav has overlay class before adding expanding class
  toggleMenu() {
    this.menuToggle = !this.menuToggle;
  }

  toggleSidenav() {
    this.toggleEmitter.emit();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const pos = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    const heroHeight = window.innerHeight / 2 - 70;
    const windowWidth = window.innerWidth;
    // Check scroll position and window width
    if (pos > heroHeight && windowWidth < 960) {
      this.navScrolled = true;
    } else if (pos < heroHeight && windowWidth < 960) {
      this.navScrolled = false;
    }
  }

}
