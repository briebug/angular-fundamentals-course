import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoursesService } from '@bba/core-data';
import { of } from 'rxjs';
import { CourseComponent } from './course.component';

const mockCoursesService = {
  find: (courseId) => of({})
}

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let de: DebugElement;
  let coursesService: CoursesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent ],
      providers: [
        { provide: CoursesService, useValue: mockCoursesService }
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    coursesService = de.injector.get(CoursesService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call coursesService.find on loadCourse', () => {
    const courseId = 1;
    spyOn(coursesService, 'find').and.callThrough();
    component.loadCourse(courseId);
    expect(coursesService.find).toHaveBeenCalledWith(courseId);
  });
});
