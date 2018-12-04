import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared-module/shared.module';
import { VersionSevenContainerComponent } from './version-seven-container/version-seven-container.component';
import { VersionSevenChartComponent } from './version-seven-chart/version-seven-chart.component';
import { VersionSevenGridComponent } from './version-seven-grid/version-seven-grid.component';

const routes: Routes = [
  { path: '', component: VersionSevenContainerComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    VersionSevenChartComponent,
    VersionSevenContainerComponent,
    VersionSevenGridComponent
  ]
})
export class VersionSevenRoutingModule { }
