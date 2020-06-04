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

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
    this.resetCourse();
  }

  selectCourse(course: Course) {
    this.currentCourse = course;
  }

  saveCourse(course: Course) {
    if(course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  createCourse(course: Course) {
    console.log('COURSE CREATED', course);
  }

  updateCourse(course: Course) {
    console.log('COURSE UPDATED', course);
  }

  deleteCourse(course: Course) {
    console.log('COURSE DELETED', course);
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
