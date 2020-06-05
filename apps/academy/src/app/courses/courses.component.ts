import { Component, OnInit } from '@angular/core';
import { Course } from '@bba/api-interfaces';
import { CoursesService } from '@bba/core-data';

@Component({
  selector: 'bba-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  currentCourse: Course = null;
  courses: Course[] = [];

  constructor(
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.getCourses();
    this.resetCourse();
  }

  selectCourse(course: Course) {
    this.currentCourse = course;
  }

  getCourses() {
    this.coursesService.all()
      .subscribe(
        courses => {
          this.courses = courses;
        },
        error => console.log(`ALERT! ${error}`)
      );
  }

  saveCourse(course: Course) {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  createCourse(course: Course) {
    this.coursesService.create(course)
      .subscribe(
        result => this.refreshCourses(),
        error => console.log(`ALERT! ${error}`)
      );
  }

  updateCourse(course: Course) {
    this.coursesService.update(course)
      .subscribe(
        result => this.refreshCourses(),
        error => console.log(`ALERT! ${error}`)
      );
  }

  deleteCourse(course: Course) {
    this.coursesService.delete(course.id)
      .subscribe(
        result => this.refreshCourses(),
        error => console.log(`ALERT! ${error}`)
      );
  }

  cancel() {
    this.resetCourse();
  }

  private refreshCourses() {
    this.getCourses();
    this.resetCourse();
  }

  private resetCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    }
    this.selectCourse(emptyCourse);
  }

  private transformCourse(course: Course): Course {
    return Object.assign({}, course, {
      title: course.title.toUpperCase(),
      percentComplete: 100
    })
  }
}
