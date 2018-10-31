import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { Model, loadModel } from '@tensorflow/tfjs';

import { BaseUrl } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class BreedClassificationService {

  constructor() { }

  getTopModel(): Observable<Model> {
    return from(loadModel(BaseUrl + 'mobinet/model.json'));
  }

  getMobinet(): Observable<Model> {
    return from(loadModel(BaseUrl + 'mobilenet/model.json'));
  }


}
