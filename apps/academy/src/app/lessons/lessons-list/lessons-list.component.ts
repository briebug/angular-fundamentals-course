import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lesson } from '@bba/api-interfaces';

@Component({
  selector: 'bba-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent {
  @Input() lessons: Lesson[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
