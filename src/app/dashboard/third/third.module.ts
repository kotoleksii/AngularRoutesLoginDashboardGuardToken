import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThirdComponent} from "./third.component";
import {RouterModule, Routes} from "@angular/router";
import {ChartModule, HIGHCHARTS_MODULES} from 'angular-highcharts';
import {HighchartsChartModule} from "highcharts-angular";


const routes: Routes = [
  {
    path: '',
    component: ThirdComponent
  }
]

@NgModule({
  declarations: [ThirdComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartModule,
    HighchartsChartModule,
  ]
})
export class ThirdModule { }
