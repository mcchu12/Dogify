import { TestBed } from '@angular/core/testing';

import { BreedClassificationService } from './breed-classification.service';

describe('BreedClassificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreedClassificationService = TestBed.get(BreedClassificationService);
    expect(service).toBeTruthy();
  });
});
