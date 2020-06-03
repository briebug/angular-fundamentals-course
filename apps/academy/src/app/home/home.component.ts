import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'bba-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentLesson = null;
  courseTitle = 'Angular Fundamentals';
  courseLessons = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
    { title: 'Component Driven Architecture' },
  ];

  constructor() {
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

  selectLesson(lesson) {
    this.currentLesson = lesson;
  }
}
