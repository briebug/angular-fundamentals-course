import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsComponent } from './lessons.component';
import { LessonsStatusComponent } from './lessons-status/lessons-status.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonDetailsComponent } from './lesson-details/lesson-details.component';
import { MaterialModule } from '@bba/material';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LessonsComponent,
    LessonsListComponent,
    LessonDetailsComponent,
    LessonsStatusComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    LessonsRoutingModule
  ]
})
export class LessonsModule { }
