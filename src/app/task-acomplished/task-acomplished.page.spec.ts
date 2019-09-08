import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAcomplishedPage } from './task-acomplished.page';

describe('TaskAcomplishedPage', () => {
  let component: TaskAcomplishedPage;
  let fixture: ComponentFixture<TaskAcomplishedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskAcomplishedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAcomplishedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
