import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterViewInit {

  posts: any;
  first: any;
  postItem: Element;

  constructor(private http: HttpClient, private el: ElementRef) { }

  ngOnInit() {
    this.http.get('http://localhost:5000/api/blog').subscribe(
      res => {
        this.posts = res;
        this.first = res[0];
        console.log(this.posts);
      }
    );
  }

  ngAfterViewInit(): void {
    this.resizeAllGridItems();
  }

  private resizeGridItem(item: HTMLElement) {
    const grid = this.el.nativeElement.querySelector('.post-container');
    const gridAttr = window.getComputedStyle(grid);
    const rowHeight = parseInt(gridAttr.getPropertyValue('grid-auto-rows'), 10);
    console.log('rowHeight', rowHeight);
    const rowGap = parseInt(gridAttr.getPropertyValue('grid-row-gap'), 10);
    console.log('rowGap', rowGap);
    const contentHeight = item.querySelector('.post-content').getBoundingClientRect().height;
    const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
    console.log(contentHeight);
    console.log('rowSpan', rowSpan);
    item.style.gridRowEnd = 'span ' + rowSpan;
  }

  private resizeAllGridItems() {
   const items = this.el.nativeElement.querySelectorAll('.post');
  items.forEach(element => {
    this.resizeGridItem(element);
  });
  }
}
