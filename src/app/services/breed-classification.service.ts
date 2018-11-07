import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { BaseUrl } from '../shared/constants';
import { Breed } from '../shared/breed';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BreedClassificationService {

  breedList: Breed[];

  constructor(private http: HttpClient) {
  }

  upload(file: any): Observable<any> {
    const fd = new FormData();
    fd.append('file', file);

    return from(this.http.post(BaseUrl + 'api/upload', fd));
  }

}
