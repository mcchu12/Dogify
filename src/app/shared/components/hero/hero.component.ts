import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { kBaseImgUrl } from '../../constants';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() title: string;
  img: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.img = kBaseImgUrl + this.router.url + '.jpg';
  }

}
