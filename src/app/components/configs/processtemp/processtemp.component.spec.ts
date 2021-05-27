import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesstempComponent } from './processtemp.component';

describe('ProcesstempComponent', () => {
  let component: ProcesstempComponent;
  let fixture: ComponentFixture<ProcesstempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesstempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesstempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
