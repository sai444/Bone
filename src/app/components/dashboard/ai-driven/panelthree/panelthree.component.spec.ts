import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelthreeComponent } from './panelthree.component';

describe('PanelthreeComponent', () => {
  let component: PanelthreeComponent;
  let fixture: ComponentFixture<PanelthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
