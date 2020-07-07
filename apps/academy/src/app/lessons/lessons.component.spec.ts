import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsComponent } from './lessons.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonDetailsComponent } from './lesson-details/lesson-details.component';
import { MaterialModule } from '@bba/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('LessonsComponent', () => {
  let component: LessonsComponent;
  let fixture: ComponentFixture<LessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LessonsComponent,
        LessonsListComponent,
        LessonDetailsComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        MaterialModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
