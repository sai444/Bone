import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantmachineComponent } from './plantmachine.component';

describe('PlantmachineComponent', () => {
  let component: PlantmachineComponent;
  let fixture: ComponentFixture<PlantmachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantmachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
