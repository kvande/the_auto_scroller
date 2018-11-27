import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ISelectedPoint, IZoomRange } from 'src/app/interfaces/IForHighCharts';
import { SeriesService } from '../series.service';


@Component({
  selector: 'app-version-three-chart',
  templateUrl: './version-three-chart.component.html',
  styleUrls: ['./version-three-chart.component.scss']
})
export class VersionThreeChartComponent implements OnInit {

  @Output()
  public didZoom = new EventEmitter<IZoomRange>();

  @Output()
  public didSelectPoint = new EventEmitter<ISelectedPoint>();

  public Highcharts = Highcharts;
  public chartOptions: any = {
    title: { text: ''},
    credits: { enabled: false },
  };

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    this.chartOptions.series = this.createChartSeries();

    this.chartOptions.plotOptions = {
      series: {
        events: {
          click: (event) => this.clickHandler(event)
        },
      }
    };

    this.chartOptions.chart = {
      zoomType: 'xy',
      events: {
        selection: (event) => this.zoomHandler(event),
      }
    };
  }

  private createChartSeries = (): Array<{type: string, data: Array<number>}> => {
    return  this.seriesService.getSeries().map(s => ( {
      data: [...s.values],
      type: 'line',
      name: s.name
    }));
  }

  private clickHandler = ( p: {point: any}) => {

    this.didSelectPoint.emit({
      name: p.point.series.name,
      xValue: p.point.x,
      yValue: p.point.y
    });
  }

  private zoomHandler = (event: any) => {
    if (event.resetSelection) { return; }

    // there is only one axis, saft to use the first one
    this.didZoom.emit({
      minX: event.xAxis[0].min,
      maxX: event.xAxis[0].max,
      minY: event.yAxis[0].min,
      maxY: event.yAxis[0].max
    });
  }

}
