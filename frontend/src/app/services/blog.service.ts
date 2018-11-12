import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    @Inject('BaseUrl') private BaseUrl,
    private http: HttpClient) { }

  getPosts(): Observable<Object> {
    return this.http.get(this.BaseUrl + 'api/blog');
  }

  getPost(id: number) {
    return this.http.get(this.BaseUrl + 'api/blog/' + id);
  }
}
