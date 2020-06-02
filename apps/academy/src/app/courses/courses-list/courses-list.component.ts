import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '@bba/api-interfaces';

@Component({
  selector: 'bba-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  @Input() courses: Course[];
  @Output() selected = new EventEmitter<Course>();
  @Output() deleted = new EventEmitter<number>();
}
