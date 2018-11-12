import { Component, OnInit, HostBinding, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() isBlog = false;
  @Input() blogTitle;
  @Input() blogThumbnail;

  title: string;
  img: string;

  constructor(
    @Inject('BaseUrl') private BaseUrl,
    private router: Router) { }

  ngOnInit() {
    this.init();
  }

  private init() {
    if (!this.isBlog) {
      const route = this.router.url;
      this.img = `${this.BaseUrl}static/img${route}.jpg`;
      this.title = route.replace('/', '');
    } else if (!this.blogThumbnail) {
      this.blogThumbnail = this.BaseUrl + 'static/img/default.jpg';
    }
  }

}
