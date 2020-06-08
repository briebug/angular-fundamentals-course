import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLessonsComponent } from './course-lessons.component';
import { MaterialModule } from '@bba/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CourseLessonsComponent', () => {
  let component: CourseLessonsComponent;
  let fixture: ComponentFixture<CourseLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLessonsComponent ],
      imports: [
        MaterialModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
