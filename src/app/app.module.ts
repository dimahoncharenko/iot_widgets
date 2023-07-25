import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
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
import { WidgetFourComponent } from './widget-four/widget-four.component';
import { WidgetOne } from './widget-one-var-two/widget-one-var-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WidgetOne,
    WidgetTwoComponent,
    WidgetThreeComponent,
    WidgetFourComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
