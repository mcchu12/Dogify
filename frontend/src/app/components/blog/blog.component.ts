import { Component, OnInit, Inject, ElementRef, HostListener, ViewChildren, QueryList} from '@angular/core';

import { BlogService } from '../../services/blog.service';

import { Post } from '../../shared/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Post[];

  @ViewChildren('item') postItems: QueryList<any>;

  constructor(
    @Inject('BaseUrl') public BaseUrl,
    private el: ElementRef,
    private blogService: BlogService) {
   }

  ngOnInit() {
    this.blogService.getPosts().subscribe(
      res => {
        this.posts = res;
        this.postItems.changes.subscribe(() => this.resizeAllGridItems());
      },
      err => console.log(err)
    );
  }

  private resizeGridItem(item: HTMLElement) {
    const grid = this.el.nativeElement.querySelector('.masonry--gt-xs');
    const gridAttr = window.getComputedStyle(grid);
    const rowHeight = parseInt(gridAttr.getPropertyValue('grid-auto-rows'), 10);
    const rowGap = parseInt(gridAttr.getPropertyValue('grid-row-gap'), 10);
    const contentHeight = item.querySelector('.post-preview').getBoundingClientRect().height;
    const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = 'span ' + rowSpan;
  }

  private resizeAllGridItems() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 600) {
      return;
    }
    const items = this.el.nativeElement.querySelectorAll('.post');
    items.forEach(element => {
      this.resizeGridItem(element);
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.resizeAllGridItems();
  }

}
