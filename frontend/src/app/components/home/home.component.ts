import { Component, OnInit } from '@angular/core';

import { faPaw, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  icPaw: IconDefinition;

  constructor() { }

  ngOnInit() {
    this.icPaw = faPaw;
  }

}
