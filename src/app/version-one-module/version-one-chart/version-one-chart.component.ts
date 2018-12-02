import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ISelectedPoint } from 'src/app/interfaces/IForHighCharts';


@Component({
  selector: 'app-version-one-chart',
  templateUrl: './version-one-chart.component.html',
  styleUrls: ['./version-one-chart.component.scss']
})
export class VersionOneChartComponent implements OnInit {

  @Output()
  public didSelectPoint = new EventEmitter<ISelectedPoint>();

  public Highcharts = Highcharts;
  public chartOptions: any = {
    chart: {
      zoomType: 'xy'
    },
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
          click: (event) => this.clickHandler(event),
        },
      }
    };
  }

  private clickHandler = ( p: {point: any}) => {

    this.didSelectPoint.emit({
      name: p.point.series.name,
      xValue: p.point.x,
      yValue: p.point.y
    });
  }

}
