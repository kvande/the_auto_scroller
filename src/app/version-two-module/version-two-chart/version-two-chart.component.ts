import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ISelectedPoint, IZoomRange } from 'src/app/interfaces/IForHighCharts';


@Component({
  selector: 'app-version-two-chart',
  templateUrl: './version-two-chart.component.html',
  styleUrls: ['./version-two-chart.component.scss']
})
export class VersionTwoChartComponent implements OnInit {

  @Output()
  public didZoom = new EventEmitter<IZoomRange>();

  public Highcharts = Highcharts;
  public chartOptions: any = {
    series: [{
      data: [1, 2, 3, 4, 2, 5, 3, 6, 7, 8, 3],
      type: 'area'
    },
    {
      data: [12, 12, 6, 5, 2, 5, 3, 6, 7, 8, 3],
      type: 'line'
    }],
    title: { text: ''},
    credits: { enabled: false },
  };

  constructor() { }

  ngOnInit() {

    this.chartOptions.plotOptions = {
      series: {
        events: {
          selection: (event) => this.zoomed(event)
        },
      }
    };
    this.chartOptions.chart = {
      zoomType: 'xy',
      events: {
        selection: (event) => this.zoomed(event)
      }
    };
  }

  private zoomed = (event: any) => {
    if (event.resetSelection) { return; }

    const round = (v: number) => Math.round(v * 100) / 100;

    this.didZoom.emit({
      minX: round(event.xAxis[0].min),
      maxX: round(event.xAxis[0].max),
      minY: round(event.yAxis[0].min),
      maxY: round(event.yAxis[0].max)
    });
  }

}
