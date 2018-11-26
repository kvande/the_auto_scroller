import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ISelectedPoint } from 'src/app/interfaces/IForHighCharts';


@Component({
  selector: 'app-version-one-container',
  templateUrl: './version-one-container.component.html',
  styleUrls: ['./version-one-container.component.scss']
})
export class VersionOneContainerComponent implements OnInit {

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
      data: [12, 12, 3, 4, 2, 5, 3, 6, 7, 8, 3],
      type: 'line'
    }],
    title: { text: ''},
    credits: { enable: false },
  };

  public selectedPoint: ISelectedPoint;

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
    this.selectedPoint = {
      xValue: p.point.x,
      yValue: p.point.y
    };
  }


}
