import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermsOfServicePage } from './therms-of-service.page';

describe('ThermsOfServicePage', () => {
  let component: ThermsOfServicePage;
  let fixture: ComponentFixture<ThermsOfServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermsOfServicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermsOfServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
