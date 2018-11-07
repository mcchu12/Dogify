import { Component, OnInit, Inject } from '@angular/core';

import { BreedClassificationService } from '../../services/breed-classification.service';
import { Breed } from 'src/app/shared/breed';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})

export class BreedsComponent implements OnInit {

  preview: string;
  breed: string;
  reader: FileReader;

  breedList: Breed[];

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

    this.reader.onload = () => {
      const dataUrl = this.reader.result.toString();
      this.preview = dataUrl;
    };
    const file = event.target.files[0];
    this.reader.readAsDataURL(file);

    this.breedService.upload(file).subscribe(
      res => this.breed = res.breed
    );
  }
}
