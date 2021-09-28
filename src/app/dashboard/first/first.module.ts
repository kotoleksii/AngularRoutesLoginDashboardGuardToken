import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirstComponent} from "./first.component";
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {
    path: '',
    component: FirstComponent
  }
]

@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
  ]
})
export class FirstModule {
}
