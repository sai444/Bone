import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsimageComponent } from './alertsimage.component';

describe('AlertsimageComponent', () => {
  let component: AlertsimageComponent;
  let fixture: ComponentFixture<AlertsimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertsimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
