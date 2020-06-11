import { TestBed } from '@angular/core/testing';

import { LoggingInterceptor } from './logging.interceptor';
import { HttpRequest } from '@angular/common/http';

const err: any = { status: 500 };
const next: any = {
  handle: (request: HttpRequest<any>) => ({
    catch: (callback: Function) => callback(err)
  })
};

describe('LoggingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoggingInterceptor
    ]
  }));

  it('should be created', () => {
    const interceptor: LoggingInterceptor = TestBed.inject(LoggingInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should console log', () => {
    const interceptor: LoggingInterceptor = TestBed.inject(LoggingInterceptor);
    spyOn(console, 'log');
    interceptor.intercept({} as any, next);
    expect(console.log).toHaveBeenCalled();
  });
});
