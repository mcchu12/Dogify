import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input('imgName') img: string;
  BASE_URL = '../../../../assets/img/';


  constructor() { }

  ngOnInit() {
    this.img = this.BASE_URL + this.img;
  }

}
