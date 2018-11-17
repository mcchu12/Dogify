import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Post } from '../../shared/post';
import { BlogService } from 'src/app/services/blog.service';

import { faArrowLeft, faArrowRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';

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

  icArrowLeft: IconDefinition;
  icArrowRight: IconDefinition;

  constructor(
    @Inject('BaseUrl') public BaseUrl,
    private blogService: BlogService,
    private route: ActivatedRoute) {
    }

  ngOnInit() {
    this.blogService.getPostIds().subscribe(
      res => {
        this.postIds = res;
        this.getPost();
      },
      err => console.log(err)
    );

    this.icArrowLeft = faArrowLeft;
    this.icArrowRight = faArrowRight;
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
    this.next = this.postIds[(this.postIds.length + i - 1) % this.postIds.length];
    this.prev = this.postIds[(this.postIds.length + i + 1) % this.postIds.length];
  }

}
