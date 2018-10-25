import { Component, OnInit } from '@angular/core';
import { faBars, faEllipsisV, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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

  toggle() {
    this.menuToggle = !this.menuToggle;
  }

}
