import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanthomeComponent } from './planthome.component';

describe('PlanthomeComponent', () => {
  let component: PlanthomeComponent;
  let fixture: ComponentFixture<PlanthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanthomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
