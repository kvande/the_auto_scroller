import { NgModule } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { VersionSixRoutingModule } from './version-six-routing.module';

@NgModule({
  imports: [
    VersionSixRoutingModule
  ],
  providers: [
    SeriesService
  ]
})
export class VersionSixModule { }
