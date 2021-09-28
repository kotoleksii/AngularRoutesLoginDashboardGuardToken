import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {RouterModule, Routes} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'first',
        loadChildren: () => import('./first/first.module').then(m => m.FirstModule),
      },
      {
        path: 'second',
        loadChildren: () => import('./second/second.module').then(m => m.SecondModule),
      },
      {
        path: 'third',
        loadChildren: () => import('./third/third.module').then(m => m.ThirdModule),
      },
      {
        path: 'fourth',
        loadChildren: () => import('./fourth/fourth.module').then(m => m.FourthModule),
      },
    ]
  }
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
