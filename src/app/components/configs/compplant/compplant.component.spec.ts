import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompplantComponent } from './compplant.component';

describe('CompplantComponent', () => {
  let component: CompplantComponent;
  let fixture: ComponentFixture<CompplantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompplantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
