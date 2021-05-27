import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingtempComponent } from './thingtemp.component';

describe('ThingtempComponent', () => {
  let component: ThingtempComponent;
  let fixture: ComponentFixture<ThingtempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThingtempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
