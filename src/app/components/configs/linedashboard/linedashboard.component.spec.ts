import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinedashboardComponent } from './linedashboard.component';

describe('LinedashboardComponent', () => {
  let component: LinedashboardComponent;
  let fixture: ComponentFixture<LinedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinedashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
