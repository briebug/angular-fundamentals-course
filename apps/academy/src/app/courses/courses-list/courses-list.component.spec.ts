import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { MaterialModule } from '@bba/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        NoopAnimationsModule,
      ],
      declarations: [ CoursesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
