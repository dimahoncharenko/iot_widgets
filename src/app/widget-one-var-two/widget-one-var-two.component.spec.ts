import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetOneVarTwoComponent } from './widget-one-var-two.component';

describe('WidgetOneVarTwoComponent', () => {
  let component: WidgetOneVarTwoComponent;
  let fixture: ComponentFixture<WidgetOneVarTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetOneVarTwoComponent]
    });
    fixture = TestBed.createComponent(WidgetOneVarTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
