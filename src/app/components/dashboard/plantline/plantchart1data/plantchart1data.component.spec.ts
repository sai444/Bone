import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plantchart1dataComponent } from './plantchart1data.component';

describe('Plantchart1dataComponent', () => {
  let component: Plantchart1dataComponent;
  let fixture: ComponentFixture<Plantchart1dataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plantchart1dataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Plantchart1dataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
