import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Treand4Component } from './treand4.component';

describe('Treand4Component', () => {
  let component: Treand4Component;
  let fixture: ComponentFixture<Treand4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Treand4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Treand4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
