import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateRouteGuard } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateRouteGuard]
    });
  });

  it('should ...', inject([CanActivateRouteGuard], (guard: CanActivateRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
