import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFourComponent } from './widget-four.component';

describe('WidgetFiveComponent', () => {
  let component: WidgetFourComponent;
  let fixture: ComponentFixture<WidgetFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetFourComponent]
    });
    fixture = TestBed.createComponent(WidgetFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
