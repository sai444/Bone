import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinemetaComponent } from './linemeta.component';

describe('LinemetaComponent', () => {
  let component: LinemetaComponent;
  let fixture: ComponentFixture<LinemetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinemetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinemetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
