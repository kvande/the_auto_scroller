import { NgModule } from '@angular/core';
import { SharedModule } from '../shared-module/shared.module';
import { VersionThreeRoutingModule } from './version-three-routing.module';
import { SeriesService } from '../services/series.service';

@NgModule({
  imports: [
    VersionThreeRoutingModule
  ],
  providers: [
    SeriesService
  ]
})
export class VersionThreeModule { }
