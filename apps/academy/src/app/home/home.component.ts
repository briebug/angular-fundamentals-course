import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bba-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courseTitle = 'Angular Fundamentals'
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

  constructor() { }

  ngOnInit(): void {
  }
}
