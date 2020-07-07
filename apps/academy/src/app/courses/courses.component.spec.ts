import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoursesService } from '@bba/core-data';
import { MaterialModule } from '@bba/material';
import { of } from 'rxjs';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

const mockEmptyCourse = {
  id: null,
  title: 'Mock Empty Course',
  description: '',
  percentComplete: 0,
  favorite: false
};

const mockCourse = {
  id: '1',
  title: 'Mock Course',
  description: '',
  percentComplete: 0,
  favorite: false
};

const mockCoursesService = {
  all: () => of([]),
  create: () => of({}),
  update: () => of({}),
  delete: () => of({})
}

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let de: DebugElement;
  let coursesService: CoursesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        MaterialModule,
        NoopAnimationsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: CoursesService, useValue: mockCoursesService }
      ],
      declarations: [
        CoursesComponent,
        CoursesListComponent,
        CourseDetailsComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    coursesService = de.injector.get(CoursesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a course', () => {
    component.selectCourse(mockCourse);
    expect(component.currentCourse).toBe(mockCourse);
  });

  it('should call proper method on save course', () => {
    spyOn(component, 'createCourse').and.callThrough();
    spyOn(component, 'updateCourse').and.callThrough();

    component.saveCourse(mockCourse);
    expect(component.updateCourse).toHaveBeenCalledWith(mockCourse);
    component.saveCourse(mockEmptyCourse);
    expect(component.createCourse).toHaveBeenCalledWith(mockEmptyCourse);
  });

  it('should get courses', () => {
    spyOn(coursesService, 'all').and.callThrough();
    component.getCourses();
    expect(coursesService.all).toHaveBeenCalled();
  });

  it('should call coursesService.create', () => {
    spyOn(coursesService, 'create').and.callThrough();
    component.createCourse(mockEmptyCourse);
    expect(coursesService.create).toHaveBeenCalledWith(mockEmptyCourse);
  });

  it('should call coursesService.update', () => {
    spyOn(coursesService, 'update').and.callThrough();
    component.updateCourse(mockCourse);
    expect(coursesService.update).toHaveBeenCalledWith(mockCourse);
  });

  it('should call coursesService.delete', () => {
    spyOn(coursesService, 'delete').and.callThrough();
    component.deleteCourse(mockCourse);
    expect(coursesService.delete).toHaveBeenCalledWith(mockCourse.id);
  });
});
