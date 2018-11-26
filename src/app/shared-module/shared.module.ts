import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports: [
    CommonModule,
    HighchartsChartModule
  ]
})
export class SharedModule { }
