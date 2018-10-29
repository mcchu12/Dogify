import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent implements OnInit {

  title = 'Breeds';
  preview: ElementRef;
  change: Boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.preview = this.el.nativeElement.querySelector('.img-preview');
  }

  onImgSelected(event) {
    this.change = true;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result.toString();
      this.renderer.setAttribute(this.preview, 'src', dataUrl);
      this.change = false;
    };

    reader.readAsDataURL(event.target.files[0]);
  }

}
