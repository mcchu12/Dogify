import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Restangular } from 'ngx-restangular';

import { loadModel } from '@tensorflow/tfjs';

import { BaseUrl } from '../shared/constants';
import { BreedIdentifier } from '../shared/predictBreed';
import { Breed } from '../shared/breed';

@Injectable({
  providedIn: 'root'
})
export class BreedClassificationService {

  breedIdentifier: BreedIdentifier;
  breedList: Breed[];

  constructor(private restangular: Restangular) {
    this.loadModel();
    this.getBreedList();
  }

  private async loadModel() {
    // Load pretrained keras model on Imagenet
    const base = await loadModel(BaseUrl + 'mobilenet/model.json');

    // Load trained on Kaggle dog data set
    const top = await loadModel(BaseUrl + 'topModel/model.json');

    this.breedIdentifier = new BreedIdentifier(top, base);
    console.log('Load model done!');
  }

  private getBreedList(): void {
    this.restangular.all('breeds').getList()
      .subscribe(
        res => { this.breedList = res; },
        err => console.log(err.message)
      );
  }

  async predict(dataUrl: string) {
    const breed = await this.breedIdentifier.predict(dataUrl);
    if (breed && this.breedList) {
      return this.breedList[breed];
    }
  }


}
