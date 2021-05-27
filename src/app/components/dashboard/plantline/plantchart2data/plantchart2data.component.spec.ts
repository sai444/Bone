import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plantchart2dataComponent } from './plantchart2data.component';

describe('Plantchart2dataComponent', () => {
  let component: Plantchart2dataComponent;
  let fixture: ComponentFixture<Plantchart2dataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plantchart2dataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Plantchart2dataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
