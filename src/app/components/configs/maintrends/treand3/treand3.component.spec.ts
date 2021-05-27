import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Treand3Component } from './treand3.component';

describe('Treand3Component', () => {
  let component: Treand3Component;
  let fixture: ComponentFixture<Treand3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Treand3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Treand3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
