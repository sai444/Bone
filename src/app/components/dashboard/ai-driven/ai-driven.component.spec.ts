import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiDrivenComponent } from './ai-driven.component';

describe('AiDrivenComponent', () => {
  let component: AiDrivenComponent;
  let fixture: ComponentFixture<AiDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
