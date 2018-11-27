import { NgModule } from '@angular/core';
import { SharedModule } from '../shared-module/shared.module';
import { VersionTwoRoutingModule } from './version-two-routing.module';

@NgModule({
  imports: [
    SharedModule,
    VersionTwoRoutingModule
  ]
})
export class VersionTwoModule { }
