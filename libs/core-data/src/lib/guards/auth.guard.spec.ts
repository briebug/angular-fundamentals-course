import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should activate properly', () => {
    // Obviously not a real test...
    const result = guard.canActivate(
      new ActivatedRouteSnapshot(),
      <RouterStateSnapshot>{ url: 'testUrl' }
    );
    expect(result).toBeFalsy();
  });
});
