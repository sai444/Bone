import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachdashboardComponent } from './machdashboard.component';

describe('MachdashboardComponent', () => {
  let component: MachdashboardComponent;
  let fixture: ComponentFixture<MachdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
