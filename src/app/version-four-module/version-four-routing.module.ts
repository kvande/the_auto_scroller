import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared-module/shared.module';
import { VersionFourContainerComponent } from './version-four-container/version-four-container.component';
import { VersionFourChartComponent } from './version-four-chart/version-four-chart.component';
import { VersionFourGridComponent } from './version-four-grid/version-four-grid.component';

const routes: Routes = [
  { path: '', component: VersionFourContainerComponent}
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
    VersionFourChartComponent,
    VersionFourContainerComponent,
    VersionFourGridComponent
  ]
})
export class VersionFourRoutingModule { }
