import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

import { Post } from '../../shared/post';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {

  post: Post;
  postIds: number[];

  prev: number;
  next: number;

  constructor(
    @Inject('BaseUrl') public BaseUrl,
    private blogService: BlogService,
    private route: ActivatedRoute) {
    }

  ngOnInit() {
    // const id = +this.route.snapshot.params['id'];

    this.blogService.getPostIds().subscribe(
      res => {
        this.postIds = res;
        this.getPost();
      },
      err => console.log(err)
    );

  }

  private getPost() {
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.blogService.getPost(+params['id']);
      }))
      .subscribe(
        res => {
          this.post = res;
          if (!res.thumbnail) {
            this.post.thumbnail = 'static/img/default.jpg';
          }
          this.setPrevNext(this.post.id);
        },
        err => console.log(err)
      );
  }

  private setPrevNext(currentId: number) {
    const i =  this.postIds.indexOf(currentId);
    this.prev = this.postIds[(this.postIds.length + i - 1) % this.postIds.length];
    this.next = this.postIds[(this.postIds.length + i + 1) % this.postIds.length];
  }

}
