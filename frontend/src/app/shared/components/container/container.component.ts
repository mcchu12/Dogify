import { Component, OnInit, HostBinding, Input } from '@angular/core';

import { fade, fadeInLeft } from 'src/app/animations/animations';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  animations: [
    fade(),
    fadeInLeft()
  ]
})
export class ContainerComponent implements OnInit {

  @HostBinding('@fade') public animated = true;

  @Input() showTitle = true;

  constructor() { }

  ngOnInit() {
  }

}
