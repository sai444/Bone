import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsimgconfigComponent } from './alertsimgconfig.component';

describe('AlertsimgconfigComponent', () => {
  let component: AlertsimgconfigComponent;
  let fixture: ComponentFixture<AlertsimgconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertsimgconfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsimgconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
