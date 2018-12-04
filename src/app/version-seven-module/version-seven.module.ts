import { NgModule } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { VersionSevenRoutingModule } from './version-seven-routing.module';

@NgModule({
  imports: [
    VersionSevenRoutingModule
  ],
  providers: [
    SeriesService
  ]
})
export class VersionSevenModule { }
