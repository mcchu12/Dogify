import { Component, OnInit, Inject } from '@angular/core';

import { BreedClassificationService } from '../../services/breed-classification.service';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})

export class BreedsComponent implements OnInit {

  preview: string;
  breed: number;

  constructor(
    @Inject('BaseUrl') private BaseUrl,
    private breedServer: BreedClassificationService) {
      this.preview = this.BaseUrl + 'img/preview.jpg';
   }

  ngOnInit() {
  }

  onImgSelected(event): void {
    const reader = new FileReader();

    reader.onload = () => {
      const dataUrl = reader.result.toString();
      this.preview = dataUrl;

      this.breedServer.predict(dataUrl)
        .subscribe(
          res => this.breed = res,
          err => console.log(err.message)
        );

    };
    const file = event.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
