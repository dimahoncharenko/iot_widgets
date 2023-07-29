import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgChartsModule } from "ng2-charts";
import { HttpClientModule } from "@angular/common/http";
import { MatSlideToggleModule } from "@angular/material/slide-toggle"
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { WidgetTwoComponent } from './widget-two/widget-two.component';
import { WidgetThreeComponent } from './widget-three/widget-three.component';
import { WidgetOneComponent } from './widget-one/widget-one.component';
import { WidgetFourComponent } from './widget-four/widget-four.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WidgetOneComponent,
    WidgetTwoComponent,
    WidgetThreeComponent,
    WidgetFourComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
