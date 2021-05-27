import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneltwoComponent } from './paneltwo.component';

describe('PaneltwoComponent', () => {
  let component: PaneltwoComponent;
  let fixture: ComponentFixture<PaneltwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaneltwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaneltwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
