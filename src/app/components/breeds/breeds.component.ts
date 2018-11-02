import { Component, OnInit, Inject, HostBinding } from '@angular/core';

import { BreedClassificationService } from '../../services/breed-classification.service';
import { fade } from '../../animations/animations';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss'],
  animations: [
    fade(),
  ]
})

export class BreedsComponent implements OnInit {

  @HostBinding('@fade') animated = true;

  title = 'Breeds';
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

    reader.readAsDataURL(event.target.files[0]);
  }
}
