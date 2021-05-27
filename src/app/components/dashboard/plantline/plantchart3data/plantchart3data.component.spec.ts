import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plantchart3dataComponent } from './plantchart3data.component';

describe('Plantchart3dataComponent', () => {
  let component: Plantchart3dataComponent;
  let fixture: ComponentFixture<Plantchart3dataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plantchart3dataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Plantchart3dataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
