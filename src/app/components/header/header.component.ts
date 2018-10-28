import { Component, OnInit, ViewChild, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { faBars, faEllipsisV, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('nav') nav;

  menuToggle = false;
  sidebarToggle = false;

  icMenu: IconDefinition;
  icMore: IconDefinition;

  heroHeight: number;
  windowWidth: number;

  navDark: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.heroHeight = window.innerHeight / 2 - 80;
    this.windowWidth = window.innerWidth;
  }

  ngOnInit() {
    this.icMenu = faBars;
    this.icMore = faEllipsisV;
    console.log('Hero height: ', this.heroHeight);
  }

  // Check if nav has overlay class before adding expanding class
  toggleMenu() {
    if (this.nav.nativeElement.classList.contains('nav')) {
      this.menuToggle = !this.menuToggle;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const pos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // Check scroll position and window width
    if (pos > this.heroHeight && this.windowWidth < 960) {
      this.navDark = true;
    } else { this. navDark = false; }
  }

}
