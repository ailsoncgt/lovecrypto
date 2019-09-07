import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterProfilePage } from './alter-profile.page';

describe('AlterProfilePage', () => {
  let component: AlterProfilePage;
  let fixture: ComponentFixture<AlterProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
