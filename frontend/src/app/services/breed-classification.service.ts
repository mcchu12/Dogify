import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { Breed } from '../shared/breed';

@Injectable({
  providedIn: 'root'
})
export class BreedClassificationService {

  constructor(@Inject('BaseUrl') public BaseUrl: String, private http: HttpClient) {
  }

  predict(file: any): Observable<Breed> {
    const fd = new FormData();
    fd.append('file', file);

    return from<Breed>(this.http.post(this.BaseUrl + 'api/predict', fd));
  }

}
