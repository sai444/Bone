import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinemarkComponent } from './linemark.component';

describe('LinemarkComponent', () => {
  let component: LinemarkComponent;
  let fixture: ComponentFixture<LinemarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinemarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
