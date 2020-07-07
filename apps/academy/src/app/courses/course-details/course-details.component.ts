import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '@bba/api-interfaces';

@Component({
  selector: 'bba-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {
  currentCourse: Course;
  originalTitle;

  @Input() set course(value: Course) {
    if(!value) return;
    this.currentCourse = Object.assign({}, value);
    this.originalTitle = value.title;
  };
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
