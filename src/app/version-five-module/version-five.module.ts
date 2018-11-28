import { NgModule } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { VersionFiveRoutingModule } from './version-five-routing.module';

@NgModule({
  imports: [
    VersionFiveRoutingModule
  ],
  providers: [
    SeriesService
  ]
})
export class VersionFiveModule { }
