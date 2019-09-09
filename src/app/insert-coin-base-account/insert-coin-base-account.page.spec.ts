import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCoinBaseAccountPage } from './insert-coin-base-account.page';

describe('InsertCoinBaseAccountPage', () => {
  let component: InsertCoinBaseAccountPage;
  let fixture: ComponentFixture<InsertCoinBaseAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertCoinBaseAccountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCoinBaseAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
