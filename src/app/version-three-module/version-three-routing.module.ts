import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared-module/shared.module';
import { VersionThreeContainerComponent } from './version-three-container/version-three-container.component';
import { VersionThreeInfoComponent } from './version-three-info/version-three-info.component';
import { VersionThreeChartComponent } from './version-three-chart/version-three-chart.component';
import { VersionThreeGridComponent } from './version-three-grid/version-three-grid.component';

const routes: Routes = [
  { path: '', component: VersionThreeContainerComponent}
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
    VersionThreeInfoComponent,
    VersionThreeChartComponent,
    VersionThreeContainerComponent,
    VersionThreeGridComponent
  ]
})
export class VersionThreeRoutingModule { }
