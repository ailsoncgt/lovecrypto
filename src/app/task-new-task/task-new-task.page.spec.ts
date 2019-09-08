import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskNewTaskPage } from './task-new-task.page';

describe('TaskNewTaskPage', () => {
  let component: TaskNewTaskPage;
  let fixture: ComponentFixture<TaskNewTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskNewTaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskNewTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
