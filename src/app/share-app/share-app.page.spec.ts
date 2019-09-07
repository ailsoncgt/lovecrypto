import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareAppPage } from './share-app.page';

describe('ShareAppPage', () => {
  let component: ShareAppPage;
  let fixture: ComponentFixture<ShareAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareAppPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
