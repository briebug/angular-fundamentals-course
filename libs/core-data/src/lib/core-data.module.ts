import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpInterceptorService } from './interceptors/http.interceptor';
import { AuthService } from './services/auth/auth.service';
import { CoursesService } from './services/courses/courses.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    AuthService,
    CoursesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    }
  ]
})
export class CoreDataModule { }
