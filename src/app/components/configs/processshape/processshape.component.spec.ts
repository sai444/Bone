import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessshapeComponent } from './processshape.component';

describe('ProcessshapeComponent', () => {
  let component: ProcessshapeComponent;
  let fixture: ComponentFixture<ProcessshapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessshapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessshapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
