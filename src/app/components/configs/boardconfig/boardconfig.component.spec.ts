import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardconfigComponent } from './boardconfig.component';

describe('BoardconfigComponent', () => {
  let component: BoardconfigComponent;
  let fixture: ComponentFixture<BoardconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardconfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
