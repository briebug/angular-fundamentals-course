import { Component, OnInit } from '@angular/core';
import { Lesson } from '@bba/api-interfaces';
import { LessonsService } from '@bba/core-data';

@Component({
  selector: 'bba-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  currentLesson: Lesson = null;
  lessons: Lesson[] = [];

  constructor(private lessonsService: LessonsService) { }

  ngOnInit(): void {
    this.refreshLessons();
  }

  selectLesson(lesson: Lesson) {
    this.currentLesson = lesson;
  }

  getLessons() {
    this.lessonsService.all()
      .subscribe(lessons => this.lessons = lessons);
  }

  saveLesson(lesson: Lesson) {
    if(lesson.id) {
      this.updateLesson(lesson);
    } else {
      this.createLesson(lesson);
    }
  }

  createLesson(lesson) {
    this.lessonsService.create(lesson)
      .subscribe(result => this.refreshLessons());
  }

  updateLesson(lesson) {
    this.lessonsService.update(lesson)
      .subscribe(result => this.refreshLessons());
  }

  deleteLesson(lesson: Lesson) {
    this.lessonsService.delete(lesson.id)
      .subscribe(result => this.refreshLessons());
  }

  cancel() {
    this.resetLesson();
  }

  private refreshLessons() {
    this.getLessons();
    this.resetLesson();
  }

  private resetLesson() {
    const emptyLesson = {
      id: null,
      title: '',
      description: ''
    }
    this.currentLesson = emptyLesson;
  }

}
