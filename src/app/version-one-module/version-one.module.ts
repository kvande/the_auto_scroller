import { NgModule } from '@angular/core';
import { VersionOneRoutingModule } from './version-one-routing.module';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  imports: [
    SharedModule,
    VersionOneRoutingModule
  ]
})
export class VersionOneModule { }
