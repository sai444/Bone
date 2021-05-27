import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachmetaComponent } from './machmeta.component';

describe('MachmetaComponent', () => {
  let component: MachmetaComponent;
  let fixture: ComponentFixture<MachmetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachmetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachmetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
