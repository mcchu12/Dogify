import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

import { BreedClassificationService } from '../../../services/breed-classification.service';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {

  image: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private breedService: BreedClassificationService) { }

  ngOnInit() {
    this.image = this.data.image.replace(/(\r\n|\n|\r)/gm, '');
  }

}
