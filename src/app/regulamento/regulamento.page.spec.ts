import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulamentoPage } from './regulamento.page';

describe('RegulamentoPage', () => {
  let component: RegulamentoPage;
  let fixture: ComponentFixture<RegulamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulamentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
