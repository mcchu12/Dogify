import { Component, OnInit, ViewChild, HostListener, Inject, EventEmitter, Output } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { faBars, faEllipsisV, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('nav') nav;

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
    if (this.nav.nativeElement.classList.contains('nav')) {
      this.menuToggle = !this.menuToggle;
    }
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
