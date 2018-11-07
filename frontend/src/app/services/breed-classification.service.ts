import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { BaseUrl } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class BreedClassificationService {

  constructor(private http: HttpClient) {
  }

  predict(file: any): Observable<Object> {
    const fd = new FormData();
    fd.append('file', file);

    return from(this.http.post(BaseUrl + 'api/predict', fd));
  }

}
