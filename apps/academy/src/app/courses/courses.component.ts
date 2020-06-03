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
  ngOnInit(): void {}

  selectCourse(course) {
    this.currentCourse = course;
  }

  deleteCourse(course) {
    console.log('COURSE DELETED', course);
  }

  cancel() {
    this.currentCourse = null;
  }
}
