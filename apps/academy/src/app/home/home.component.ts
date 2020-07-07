import { Component, OnInit, OnDestroy } from '@angular/core';
import { LessonsService } from '@bba/core-data';
import { Lesson } from '@bba/api-interfaces';

@Component({
  selector: 'bba-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentLesson = null;
  courseTitle = 'Angular Fundamentals';
  courseLessons: Lesson[] = [];

  constructor(private lessonsService: LessonsService) {
    // EXECUTES IMMEDIATELY
    // CANNOT DIRECTLY TEST THE CONSTRUCTOR
    // AVOID ANY LOGIC OR SETUP IN THE CONSTRUCTOR
  }

  ngOnInit(): void {
    // SETUP LOGIC GOES HERE
  }

  ngOnDestroy(): void {
    // TEAR DOWN LOGIC GOES HERE
  }

  reset() {
    this.currentLesson = null;
  }

  createLesson(lesson) {
    this.lessonsService.create(lesson);
  }

  selectLesson(lesson) {
    this.currentLesson = lesson;
  }
}
