import { Component, OnInit } from '@angular/core';
import { Course } from '@bba/api-interfaces';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '@bba/core-data';

@Component({
  selector: 'bba-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  currentCourseId: string = null;
  currentCourse: Course = null;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.currentCourseId = this.route.snapshot.paramMap.get('id');
    this.loadCourse(this.currentCourseId);
  }

  loadCourse(courseId) {
    this.coursesService.find(courseId)
      .subscribe(course => this.currentCourse = course);
  }
}
