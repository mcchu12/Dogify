import { Component, OnInit, HostBinding, Input } from '@angular/core';

import { fade } from 'src/app/animations/animations';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  animations: [
    fade(),
  ]
})
export class ContainerComponent implements OnInit {

  @HostBinding('@fade') animated = true;

  @Input() showTitle = true;

  constructor() { }

  ngOnInit() {
  }

}
