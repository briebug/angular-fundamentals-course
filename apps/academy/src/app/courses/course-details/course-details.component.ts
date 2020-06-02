import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '@bba/api-interfaces';

@Component({
  selector: 'bba-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  @Input() set course(value: Course) {
    if (value?.title) {
      this.originalTitle = value.title;
    }
    this.currentCourse = Object.assign({}, value);
  }
  @Output() saved = new EventEmitter<Course>();
  @Output() cancelled = new EventEmitter();

  originalTitle: string;
  currentCourse: Course;

  constructor() { }

  ngOnInit(): void {
  }
}
