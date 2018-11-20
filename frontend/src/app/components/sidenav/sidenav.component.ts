import { Component, OnInit } from '@angular/core';

import { faRoute, faBone, faHome, faSuitcaseRolling, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  icRoute: IconDefinition;
  icBone: IconDefinition;
  icHome: IconDefinition;
  icSuitcase: IconDefinition;

  constructor() { }

  ngOnInit() {
    this.icRoute = faRoute;
    this.icBone = faBone;
    this.icHome = faHome;
    this.icSuitcase = faSuitcaseRolling;
  }

}
