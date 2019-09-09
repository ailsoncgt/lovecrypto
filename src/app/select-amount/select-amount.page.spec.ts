import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAmountPage } from './select-amount.page';

describe('SelectAmountPage', () => {
  let component: SelectAmountPage;
  let fixture: ComponentFixture<SelectAmountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAmountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAmountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
