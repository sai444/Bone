import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubthingshapeComponent } from './subthingshape.component';

describe('SubthingshapeComponent', () => {
  let component: SubthingshapeComponent;
  let fixture: ComponentFixture<SubthingshapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubthingshapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubthingshapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
