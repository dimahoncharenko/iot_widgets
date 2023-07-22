import { Component } from '@angular/core';

@Component({
  selector: 'app-widget-one-var-two',
  templateUrl: './widget-one-var-two.component.html',
  styleUrls: ['./widget-one-var-two.component.css']
})
export class WidgetOneVarTwoComponent {
  clicked = false;

  handleClick() {
    this.clicked = !this.clicked;
  }
}
