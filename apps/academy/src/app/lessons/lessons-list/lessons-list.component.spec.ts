import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsListComponent } from './lessons-list.component';
import { MaterialModule } from '@bba/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('LessonsListComponent', () => {
  let component: LessonsListComponent;
  let fixture: ComponentFixture<LessonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        NoopAnimationsModule,
      ],
      declarations: [ LessonsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
