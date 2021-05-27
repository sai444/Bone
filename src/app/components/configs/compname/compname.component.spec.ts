import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompnameComponent } from './compname.component';

describe('CompnameComponent', () => {
  let component: CompnameComponent;
  let fixture: ComponentFixture<CompnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
