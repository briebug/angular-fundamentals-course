import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsComponent } from './lessons.component';
import { LessonsStatusComponent } from './lessons-status/lessons-status.component';


@NgModule({
  declarations: [LessonsComponent, LessonsStatusComponent],
  imports: [
    CommonModule,
    LessonsRoutingModule
  ]
})
export class LessonsModule { }
