import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material';

import { PredictionComponent } from 'src/app/shared/components/prediction/prediction.component';

import { BreedClassificationService } from '../../services/breed-classification.service';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent implements OnInit {

  title = 'Breeds';
  // preview: ImageData;

  constructor(
    private dialog: MatDialog,
    private el: ElementRef,
    private renderer: Renderer2) {
   }

  ngOnInit() {
    // this.preview = this.el.nativeElement.querySelector('.img-preview');
  }

  onImgSelected(event): void {
    const reader = new FileReader();

    reader.onload = async () => {
      const dataUrl = reader.result.toString();
      this.openPredictionModal(dataUrl);
      // await this.renderer.setAttribute(this.preview, 'src', dataUrl);
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  openPredictionModal(image: string) {
    this.dialog.open(PredictionComponent, {
      data: { image }
    });
  }
}
