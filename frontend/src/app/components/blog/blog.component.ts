import { Component, OnInit, ElementRef, AfterViewInit, HostListener, ViewChildren, QueryList} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: any;

  @ViewChildren('item') postItems: QueryList<any>;

  constructor(private http: HttpClient, private el: ElementRef) {
   }

  ngOnInit() {
    this.http.get('http://localhost:5000/api/blog').subscribe(
      res => {
        this.posts = res;
        this.postItems.changes.subscribe(() => this.resizeAllGridItems());
      }
    );
  }

  private resizeGridItem(item: HTMLElement) {
    const grid = this.el.nativeElement.querySelector('.masonry--gt-xs');
    const gridAttr = window.getComputedStyle(grid);
    const rowHeight = parseInt(gridAttr.getPropertyValue('grid-auto-rows'), 10);
    const rowGap = parseInt(gridAttr.getPropertyValue('grid-row-gap'), 10);
    const contentHeight = item.querySelector('.post-content').getBoundingClientRect().height;
    const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = 'span ' + rowSpan;
  }

  private resizeAllGridItems() {
    const items = this.el.nativeElement.querySelectorAll('.post');
    items.forEach(element => {
      this.resizeGridItem(element);
    });
  }

  @HostListener('window:resize')
  onResize() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 600) {
      this.resizeAllGridItems();
    }
  }

}
