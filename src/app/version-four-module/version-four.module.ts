import { NgModule } from '@angular/core';
import { VersionFourRoutingModule } from './version-four-routing.module';
import { SeriesService } from '../services/series.service';

@NgModule({
  imports: [
    VersionFourRoutingModule
  ],
  providers: [
    SeriesService
  ]
})
export class VersionFourModule { }
