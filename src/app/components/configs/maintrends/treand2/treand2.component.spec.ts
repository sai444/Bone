import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Treand2Component } from './treand2.component';

describe('Treand2Component', () => {
  let component: Treand2Component;
  let fixture: ComponentFixture<Treand2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Treand2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Treand2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
