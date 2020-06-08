import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@bba/core-data';
import { CourseLessonsComponent } from './courses/course-lessons/course-lessons.component';
import { CourseComponent } from './courses/course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'lessons', loadChildren: () => import('./lessons/lessons.module').then(m => m.LessonsModule)},
  {
    path: 'courses', component: CoursesComponent,
    children: [
      {
        path: '',
        component: CourseLessonsComponent
      }
    ]
  },
  { path: 'courses/:id', component: CourseComponent },
  { path: 'login', loadChildren: () => import('@bba/ui-login').then(m => m.UiLoginModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
