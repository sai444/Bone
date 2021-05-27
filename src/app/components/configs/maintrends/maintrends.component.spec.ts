import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintrendsComponent } from './maintrends.component';

describe('MaintrendsComponent', () => {
  let component: MaintrendsComponent;
  let fixture: ComponentFixture<MaintrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
