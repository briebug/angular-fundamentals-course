import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '@bba/api-interfaces';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const BASE_URL = 'http://localhost:3000/';

export const mockCourses = [{
  id: '1',
  title: 'Angular 9 Fundamentals',
  description: 'Learn the fundamentals of Angular 9',
  percentComplete: 80,
  favorite: true
}];

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  model = 'courses';

  constructor(private http: HttpClient) { }

  all() {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'my-auth-token',
    //     'xBBA': '1234567890!!!'
    //   }),
    //   params: new HttpParams().set('utm', 'REFERRAL_SOURCE')
    // };
    return this.http.get<Course[]>(this.getUrl(), httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  find(courseId: string) {
    return this.http.get<Course>(this.getUrlById(courseId));
  }

  create(course: Course) {
    // Complete this method
  }

  update(course: Course) {
    // Complete this method
  }

  delete(courseId: string) {
    // Complete this method
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // DO SOMETHING
    } else {
      // DO SOMETHING ELSE
    }

    return throwError('Something bad happened but we ❤️ you!');
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}
