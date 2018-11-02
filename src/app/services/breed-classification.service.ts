import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { loadModel } from '@tensorflow/tfjs';

import { BaseUrl } from '../shared/constants';
import { BreedIdentifier } from '../shared/predictBreed';

@Injectable({
  providedIn: 'root'
})
export class BreedClassificationService {

  breedIdentifier: BreedIdentifier;

  constructor() {
    this.loadModel();
  }

  private async loadModel() {
    // Load pretrained keras model on Imagenet
    const base = await loadModel(BaseUrl + 'mobilenet/model.json');

    // Load trained on Kaggle dog data set
    const top = await loadModel(BaseUrl + 'topModel/model.json');

    this.breedIdentifier = new BreedIdentifier(top, base);
    console.log('Load model done!');
  }

  predict(image: any): Observable<number> {
    return from(this.breedIdentifier.predict(image));
  }


}
