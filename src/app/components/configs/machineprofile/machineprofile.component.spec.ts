import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineprofileComponent } from './machineprofile.component';

describe('MachineprofileComponent', () => {
  let component: MachineprofileComponent;
  let fixture: ComponentFixture<MachineprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
