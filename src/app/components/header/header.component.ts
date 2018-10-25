import { Component, OnInit, ViewChild } from '@angular/core';
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

  constructor() {
  }

  ngOnInit() {
    this.icMenu = faBars;
    this.icMore = faEllipsisV;
  }

  // Check if nav has overlay class before adding expanding class
  toggleMenu() {
    if (this.nav.nativeElement.classList.contains('nav')) {
      this.menuToggle = !this.menuToggle;
      console.log('Toggle: ', this.menuToggle);
    }
  }

}
