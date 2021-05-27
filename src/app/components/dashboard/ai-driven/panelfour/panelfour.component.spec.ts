import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelfourComponent } from './panelfour.component';

describe('PanelfourComponent', () => {
  let component: PanelfourComponent;
  let fixture: ComponentFixture<PanelfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelfourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
