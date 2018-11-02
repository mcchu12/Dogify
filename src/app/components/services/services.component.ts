import { Component, OnInit, HostBinding } from '@angular/core';

import { faRoute, faBone, faHome, faSuitcaseRolling, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { fade } from '../../animations/animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [
    fade(),
  ]
})
export class ServicesComponent implements OnInit {

  @HostBinding('@fade') animated = true;

  title = 'Services';

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
