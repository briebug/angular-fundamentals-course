import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bba-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  currentCourse = null;
  courses = [
    {
      id: '1',
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: '2',
      title: 'BrieBug Architecture',
      description: 'Learn how we build software at BrieBug',
      percentComplete: 0,
      favorite: false
    },
  ]

  constructor() {}
  ngOnInit(): void {
    this.resetCourse();
  }

  selectCourse(course) {
    this.currentCourse = course;
  }

  saveCourse(course) {
    if(course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  createCourse(course) {
    console.log('COURSE CREATED', course);
  }

  updateCourse(course) {
    console.log('COURSE UPDATED', course);
  }

  deleteCourse(course) {
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
