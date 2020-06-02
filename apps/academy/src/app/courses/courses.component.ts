import { Component, OnInit } from '@angular/core';
import { Course } from '@bba/api-interfaces';
import { CoursesService } from '@bba/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'bba-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  selectedCourse: Course;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.refreshCourses();
  }

  selectCourse(course: Course) {
    this.selectedCourse = course;
  }

  loadCourses() {
    this.courses$ = this.coursesService.all();
  }

  saveCourse(course: Course) {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  updateCourse(course: Course) {
    this.coursesService.update(course)
      .subscribe(() => this.refreshCourses());
  }

  createCourse(course: Course) {
    this.coursesService.create(course)
      .subscribe(() => this.refreshCourses());
  }

  deleteCourse(id: number) {
    this.coursesService.delete(id)
      .subscribe(() => this.refreshCourses());
  }

  refreshCourses() {
    this.loadCourses();
    this.resetCourse();
  }

  resetCourse() {
    const emptyCourse: Course = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };

    this.selectCourse(emptyCourse);
  }
}
