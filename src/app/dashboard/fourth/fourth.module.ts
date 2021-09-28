import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FourthComponent} from "./fourth.component";
import {RouterModule, Routes} from "@angular/router";
import {FirstComponent} from "../first/first.component";

const routes: Routes = [
  {
    path: '',
    component: FourthComponent
  }
]

@NgModule({
  declarations: [FourthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FourthModule { }
