import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInsertDataPage } from './task-insert-data.page';

describe('TaskInsertDataPage', () => {
  let component: TaskInsertDataPage;
  let fixture: ComponentFixture<TaskInsertDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskInsertDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInsertDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
