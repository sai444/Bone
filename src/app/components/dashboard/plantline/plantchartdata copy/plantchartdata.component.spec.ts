import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantchartdataComponent } from './plantchartdata.component';

describe('PlantchartdataComponent', () => {
  let component: PlantchartdataComponent;
  let fixture: ComponentFixture<PlantchartdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantchartdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantchartdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
