import { Component, OnInit, HostBinding } from '@angular/core';
import { faPaw, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { fade } from '../../animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fade(),
  ]
})
export class HomeComponent implements OnInit {

  @HostBinding('@fade') animated = true;

  icPaw: IconDefinition;

  constructor() { }

  ngOnInit() {
    this.icPaw = faPaw;
  }

}
