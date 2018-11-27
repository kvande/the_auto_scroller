import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared-module/shared.module';
import { VersionTwoContainerComponent } from './version-two-container/version-two-container.component';
import { VersionTwoInfoComponent } from './version-two-info/version-two-info.component';
import { VersionTwoChartComponent } from './version-two-chart/version-two-chart.component';

const routes: Routes = [
  { path: '', component: VersionTwoContainerComponent}
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
    VersionTwoInfoComponent,
    VersionTwoChartComponent,
    VersionTwoContainerComponent
  ]
})
export class VersionTwoRoutingModule { }
