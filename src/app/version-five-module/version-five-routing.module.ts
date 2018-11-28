import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared-module/shared.module';
import { VersionFiveContainerComponent } from './version-five-container/version-five-container.component';
import { VersionFiveChartComponent } from './version-five-chart/version-five-chart.component';
import { VersionFiveGridComponent } from './version-five-grid/version-five-grid.component';

const routes: Routes = [
  { path: '', component: VersionFiveContainerComponent }
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
    VersionFiveChartComponent,
    VersionFiveContainerComponent,
    VersionFiveGridComponent
  ]
})
export class VersionFiveRoutingModule { }
