import { Injectable } from '@angular/core';
import { Lesson } from '@bba/api-interfaces';
import { HttpClient } from '@angular/common/http';

export const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  model = 'lessons';

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get<Lesson[]>(this.getUrl());
  }

  find(lessonId: string) {
    return this.http.get<Lesson>(this.getUrlById(lessonId));
  }

  create(lesson: Lesson) {
    return this.http.post(this.getUrl(), lesson);
  }

  update(lesson: Lesson) {
    return this.http.put(this.getUrlById(lesson.id), lesson);
  }

  delete(lessonId: string) {
    return this.http.delete(this.getUrlById(lessonId));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}
