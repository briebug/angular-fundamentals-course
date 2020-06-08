import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsStatusComponent } from './lessons-status/lessons-status.component';
import { LessonsComponent } from './lessons.component';

const routes: Routes = [
  {
    path: '', component: LessonsComponent,
    children: [
      {
        path: '',
        component: LessonsStatusComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonsRoutingModule { }
