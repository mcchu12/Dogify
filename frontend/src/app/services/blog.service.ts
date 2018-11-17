import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Post } from '../shared/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    @Inject('BaseUrl') private BaseUrl,
    private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.BaseUrl + 'api/blog');
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.BaseUrl + 'api/blog/' + id);
  }

  getPostIds(): Observable<number[] | any> {
    return this.getPosts()
    .pipe(map(posts => posts.map(post => post.id)))
    .pipe(catchError(error => error));
  }
}
