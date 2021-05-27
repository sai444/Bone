import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingshapeComponent } from './thingshape.component';

describe('ThingshapeComponent', () => {
  let component: ThingshapeComponent;
  let fixture: ComponentFixture<ThingshapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThingshapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingshapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
