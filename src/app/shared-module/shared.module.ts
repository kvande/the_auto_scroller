import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HighchartsChartModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    CommonModule,
    HighchartsChartModule,
    AgGridModule
  ]
})
export class SharedModule { }
