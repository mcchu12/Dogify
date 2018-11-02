import { Component, OnInit } from '@angular/core';

import { faRoute, faBone, faHome, faSuitcaseRolling, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

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
