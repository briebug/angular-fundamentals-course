import { Injectable } from '@angular/core';
import { Course } from '@bba/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[] = [
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
  ];

  constructor() { }

  all() {
    return this.courses;
  }

  find(courseId: string) {}
  create(course: Course) {}
  update(course: Course) {}
  delete(courseId: string) {}
}
