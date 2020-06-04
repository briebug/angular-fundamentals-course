import { Injectable } from '@angular/core';
import { Lesson } from '@bba/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  lessons: Lesson[] = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
    { title: 'Component Driven Architecture' },
  ];

  constructor() { }

  create(lesson) {

  }

  update(lesson) {

  }

  delete(lesson) {

  }

}
