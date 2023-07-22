import { Component } from '@angular/core';

@Component({
  selector: 'app-widget-one',
  templateUrl: './widget-one.component.html',
  styleUrls: ['./widget-one.component.css']
})
export class WidgetOneComponent {
  isClicked = false;

  switchPower() {
    this.isClicked = !this.isClicked;
  }
}
