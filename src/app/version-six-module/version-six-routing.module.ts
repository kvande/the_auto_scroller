import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared-module/shared.module';
import { VersionSixContainerComponent } from './version-six-container/version-six-container.component';
import { VersionSixChartComponent } from './version-six-chart/version-six-chart.component';
import { VersionSixGridComponent } from './version-six-grid/version-six-grid.component';

const routes: Routes = [
  { path: '', component: VersionSixContainerComponent }
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
    VersionSixChartComponent,
    VersionSixContainerComponent,
    VersionSixGridComponent
  ]
})
export class VersionSixRoutingModule { }
