import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { BreedClassificationService } from '../../services/breed-classification.service';
import { BreedIdentifier } from '../../shared/predictBreed';

import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent implements OnInit {

  title = 'Breeds';
  preview: ImageData;

  topModel: tf.Model;
  mobinet: tf.Model;
  breedIdentifier: BreedIdentifier;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private breedService: BreedClassificationService) {
   }

  ngOnInit() {
    this.breedService.getTopModel()
      .subscribe(
        model => {
          this.topModel = model;
          console.log(this.topModel);
          this.breedIdentifier = new BreedIdentifier(this.topModel, this.mobinet);
        },
        err => console.log(err.message)
      );

    // this.breedService.getMobinet()
    //     .subscribe(
    //       model => {
    //         this.mobinet = model;
    //         this.breedIdentifier = new BreedIdentifier(this.topModel, this.mobinet);
    //       },
    //       err => console.log(err.message)
    //     );

    this.preview = this.el.nativeElement.querySelector('.img-preview');
    console.log(this.preview);
  }

  onImgSelected(event) {
    const reader = new FileReader();
    reader.onload = async () => {
      const dataUrl = reader.result.toString();
      await this.renderer.setAttribute(this.preview, 'src', dataUrl);
      console.log(this.preview);
      this.breedIdentifier.predict(this.preview)
        .then(result => console.log(result))
        .catch(err => console.log(err));
    };

    reader.readAsDataURL(event.target.files[0]);
  }
}
