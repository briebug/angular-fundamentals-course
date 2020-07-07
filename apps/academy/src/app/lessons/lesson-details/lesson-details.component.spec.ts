import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonDetailsComponent } from './lesson-details.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@bba/material';
import { FormsModule } from '@angular/forms';

const mockEmptyLesson = {
  id: null,
  title: 'Mock Empty Lesson',
  description: '',
};

describe('LessonDetailsComponent', () => {
  let component: LessonDetailsComponent;
  let fixture: ComponentFixture<LessonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MaterialModule,
        NoopAnimationsModule,
      ],
      declarations: [ LessonDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonDetailsComponent);
    component = fixture.componentInstance;
    component.lesson = mockEmptyLesson;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
