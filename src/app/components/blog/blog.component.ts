import { Component, OnInit, HostBinding } from '@angular/core';

import { fade } from '../../animations/animations';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [
    fade(),
  ]
})
export class BlogComponent implements OnInit {

  @HostBinding('@fade') animated = true;

  title = 'Blog';

  constructor() { }

  ngOnInit() {
  }

}
