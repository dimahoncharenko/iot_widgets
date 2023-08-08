import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PaletteModeComponent } from "./palette-mode/palette-mode.component";

const appRoutes: Routes = [
  {
    path: "palette-mode",
    component: PaletteModeComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
