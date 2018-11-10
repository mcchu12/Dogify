import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInLeft } from 'src/app/animations/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    fadeInLeft()
  ]
})
export class HeroComponent implements OnInit {

  @Input() showTitle = true;
  title: string;
  img: string;

  constructor(
    @Inject('BaseUrl') private BaseUrl,
    private router: Router) {
  }

  ngOnInit() {
    this.init();
  }

  private init() {
    const route = this.router.url;
    this.img = `${this.BaseUrl}static/img${route}.jpg`;
    this.title = route.replace('/', '');
  }

}
