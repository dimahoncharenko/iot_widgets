import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletteModeComponent } from './palette-mode.component';

describe('PaletteModeComponent', () => {
  let component: PaletteModeComponent;
  let fixture: ComponentFixture<PaletteModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaletteModeComponent]
    });
    fixture = TestBed.createComponent(PaletteModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
