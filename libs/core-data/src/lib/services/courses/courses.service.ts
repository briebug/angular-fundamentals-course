import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationsService } from '../notifications/notifications.service';
import { Course } from '@bba/api-interfaces';
import { tap } from 'rxjs/operators';

const BASE_URL = 'http://localhost:3000/';

export enum CoursesNotifications {
  all = 'All courses retrieved!',
  find = 'Course retrieved!',
  create = 'Course created!',
  update = 'Course updated!',
  delete = 'Course deleted!'
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  model = 'courses';

  constructor(private http: HttpClient, private notificationsService: NotificationsService) { }

  all() {
    return this.http.get<Course[]>(this.getUrl());
  }

  find(courseId: string) {
    return this.http.get(this.getUrlWithId(courseId))
      .pipe(
        tap(result => this.notify(CoursesNotifications.find))
      );
  }

  create(course: Course) {
    return this.http.post<Course>(this.getUrl(), course)
      .pipe(
        tap(result => this.notify(CoursesNotifications.create))
      );
  }

  update(course: Course) {
    return this.http.put<Course>(this.getUrlWithId(course.id), course)
      .pipe(
        tap(result => this.notify(CoursesNotifications.update))
      );
  }

  delete(courseId: number) {
    return this.http.delete(this.getUrlWithId(courseId))
      .pipe(
        tap(result => this.notify(CoursesNotifications.delete))
      );
  }

  private notify(message: string) {
    this.notificationsService.notify(message);
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
