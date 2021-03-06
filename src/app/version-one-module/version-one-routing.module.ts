import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared-module/shared.module';
import { VersionOneInfoComponent } from './version-one-info/version-one-info.component';
import { VersionOneChartComponent } from './version-one-chart/version-one-chart.component';
import { VersionOneContainerComponent } from './version-one-container/version-one-container.component';

const routes: Routes = [
  { path: '', component: VersionOneContainerComponent}
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
    VersionOneInfoComponent,
    VersionOneChartComponent,
    VersionOneContainerComponent
  ]
})
export class VersionOneRoutingModule { }
