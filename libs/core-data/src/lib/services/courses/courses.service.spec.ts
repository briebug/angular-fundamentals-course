import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MaterialModule } from '@bba/material';
import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MaterialModule
      ]
    });
    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
