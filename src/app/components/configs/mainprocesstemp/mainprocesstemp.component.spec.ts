import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainprocesstempComponent } from './mainprocesstemp.component';

describe('MainprocesstempComponent', () => {
  let component: MainprocesstempComponent;
  let fixture: ComponentFixture<MainprocesstempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainprocesstempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainprocesstempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
