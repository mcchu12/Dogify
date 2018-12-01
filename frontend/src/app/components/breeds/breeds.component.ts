import { Component, OnInit, Inject } from '@angular/core';

import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { BreedClassificationService } from '../../services/breed-classification.service';

import { Breed } from '../../shared/breed';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})

export class BreedsComponent implements OnInit {

  icPlus: IconDefinition;
  preview: string;
  isProcessing: boolean;
  breed: Breed;
  reader: FileReader;

  constructor(
    @Inject('BaseUrl') private BaseUrl,
    private breedService: BreedClassificationService) {
      this.preview = this.BaseUrl + 'static/img/preview.jpg';
      this.breed = { breed: 'Poodle', temparement: 'Active, Proud, Very Smart' };
   }

  ngOnInit() {
    this.icPlus = faPlus;
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
      this.isProcessing = true;
      // Upload to server to predict
      this.breedService.predict(file).subscribe(
        res => {
          this.reader.readAsDataURL(file);
          this.breed = res;
          this.isProcessing = false;
        },
        err => {
          this.breed = { breed: 'Something went wrong', temparement: 'Try again' };
          console.log(err);
        }
      );
    }
  }
}
