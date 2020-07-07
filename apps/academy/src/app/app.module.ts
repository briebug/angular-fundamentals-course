import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoggingInterceptor } from '@bba/core-data';
import { MaterialModule } from '@bba/material';
import { UiToolbarModule } from '@bba/ui-toolbar';
import { AppComponent } from './app.component';
import { CourseLessonsComponent } from './courses/course-lessons/course-lessons.component';
import { CourseComponent } from './courses/course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    CourseComponent,
    CourseLessonsComponent,
    CoursesListComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule,
    UiToolbarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
