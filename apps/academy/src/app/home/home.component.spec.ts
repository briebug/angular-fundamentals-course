import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LessonsService } from '@bba/core-data';
import { MaterialModule } from '@bba/material';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';

const mockLesson = {
  id: '1',
  title: 'Mock lessons'
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement;
  let lessonsService: LessonsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        HttpClientModule,
        MaterialModule,
        NoopAnimationsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    lessonsService = de.injector.get(LessonsService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a lesson', () => {
    component.selectLesson(mockLesson);
    expect(component.currentLesson).toBe(mockLesson);
  });

  it('should reset current lesson', () => {
    component.currentLesson = mockLesson;
    component.reset();
    expect(component.currentLesson).toBeNull();
  });

  it('should call lessonsService.create on create', () => {
    spyOn(lessonsService, 'create');
    component.createLesson(mockLesson);
    expect(lessonsService.create).toHaveBeenCalledWith(mockLesson);
  });
});
