import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VersionOneContainerComponent } from './version-one-container/version-one-container.component';
import { SharedModule } from '../shared-module/shared.module';
import { VersionOneInfoComponent } from './version-one-info/version-one-info.component';

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
    VersionOneContainerComponent,
    VersionOneInfoComponent
  ]
})
export class VersionOneRoutingModule { }
