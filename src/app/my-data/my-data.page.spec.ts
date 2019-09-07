import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDataPage } from './my-data.page';

describe('MyDataPage', () => {
  let component: MyDataPage;
  let fixture: ComponentFixture<MyDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
