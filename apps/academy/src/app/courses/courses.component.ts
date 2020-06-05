import { Component, OnInit } from '@angular/core';
import { Course } from '@bba/api-interfaces';
import { CoursesService } from '@bba/core-data';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'bba-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  currentCourse: Course = null;
  courses: Course[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.getCourses();
    this.resetCourse();
  }

  selectCourse(course: Course) {
    this.currentCourse = course;
  }

  getCourses() {
    this.coursesService.all()
      .pipe(
        tap(courses => console.log('COURSES ON TAP!', courses)),
        map(courses => courses.filter(course => course.favorite)),
        map(courses => courses.map(course => this.transformCourse(course)))
      )
      .subscribe(
        courses => this.courses = courses,
        error => console.log(`ALERT! ${error}`)
      );
  }

  private transformCourse(course: Course): Course {
    return Object.assign({}, course, {
      title: course.title.toUpperCase(),
      percentComplete: 100
    })
  }

  saveCourse(course: Course) {
    if(course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  createCourse(course: Course) {
    this.coursesService.create(course);
  }

  updateCourse(course: Course) {
    this.coursesService.update(course);
  }

  deleteCourse(course: Course) {
    this.coursesService.delete(course.id);
  }

  cancel() {
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
}
