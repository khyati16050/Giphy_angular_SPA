import { TestBed } from '@angular/core/testing';

import { GifsService } from './gifs.service';

describe('GifsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GifsService = TestBed.get(GifsService);
    expect(service).toBeTruthy();
  });
});
