import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantlineComponent } from './plantline.component';

describe('PlantlineComponent', () => {
  let component: PlantlineComponent;
  let fixture: ComponentFixture<PlantlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
