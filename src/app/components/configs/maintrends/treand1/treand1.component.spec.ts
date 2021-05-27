import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Treand1Component } from './treand1.component';

describe('Treand1Component', () => {
  let component: Treand1Component;
  let fixture: ComponentFixture<Treand1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Treand1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Treand1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
