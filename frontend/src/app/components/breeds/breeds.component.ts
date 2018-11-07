import { Component, OnInit, Inject } from '@angular/core';

import { BreedClassificationService } from '../../services/breed-classification.service';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})

export class BreedsComponent implements OnInit {

  preview: string;
  test: boolean;
  breed: Object;
  reader: FileReader;

  constructor(
    @Inject('BaseUrl') private BaseUrl,
    private breedService: BreedClassificationService) {
      this.preview = this.BaseUrl + 'static/img/preview.jpg';
   }

  ngOnInit() {
    // Global reader to avoid memory leak
    this.reader = new FileReader();
  }

  onImgSelected(event): void {

    // Preview image upload
    this.reader.onload = () => {
      const dataUrl = this.reader.result.toString();
      this.preview = dataUrl;
    };
    const file = event.target.files[0];

    if (file) {
      this.test = true;

      // Upload to server to predict
      this.breedService.predict(file).subscribe(
        res => {
          this.breed = res;
          this.reader.readAsDataURL(file);
          this.test = false;
        },
        err => {
          this.breed = {
            breed: 'Something went wrong',
            temparement: 'Try again'
          };
        }
      );
    }
  }
}
