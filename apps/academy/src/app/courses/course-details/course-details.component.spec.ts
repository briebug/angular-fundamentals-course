import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@bba/material';
import { CourseDetailsComponent } from './course-details.component';

const mockEmptyCourse = {
  id: null,
  title: 'Mock Empty Course',
  description: '',
  percentComplete: 0,
  favorite: false
};

describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MaterialModule,
        NoopAnimationsModule,
      ],
      declarations: [ CourseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsComponent);
    component = fixture.componentInstance;
    component.course = mockEmptyCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
