import { Injectable } from '@angular/core';
import { Lesson } from '@bba/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  lessons: Lesson[] = [];

  constructor() { }

  create(lesson) {

  }

  update(lesson) {

  }

  delete(lesson) {

  }

}
