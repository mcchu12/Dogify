import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { BaseUrl } from '../shared/constants';
import { Breed } from '../shared/breed';

@Injectable({
  providedIn: 'root'
})
export class BreedClassificationService {

  constructor(private http: HttpClient) {
  }

  predict(file: any): Observable<Breed> {
    const fd = new FormData();
    fd.append('file', file);

    return from<Breed>(this.http.post(BaseUrl + 'api/predict', fd));
  }

}
