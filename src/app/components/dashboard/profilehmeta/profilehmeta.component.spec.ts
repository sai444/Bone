import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilehmetaComponent } from './profilehmeta.component';

describe('ProfilehmetaComponent', () => {
  let component: ProfilehmetaComponent;
  let fixture: ComponentFixture<ProfilehmetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilehmetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilehmetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
