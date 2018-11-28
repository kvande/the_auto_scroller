import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ISelectedPoint, IZoomRange } from 'src/app/interfaces/IForHighCharts';
import { SeriesService } from 'src/app/services/series.service';


@Component({
  selector: 'app-version-four-chart',
  templateUrl: './version-four-chart.component.html',
  styleUrls: ['./version-four-chart.component.scss']
})
export class VersionFourChartComponent implements OnInit {

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
          click: (event) => this.clickHandler(event),
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

  private createChartSeries = (): Array<{type: string, data: Array<any>}> => {
    return  this.seriesService.getnSeries(8, 200).map(s => ( {
      data: this.createData(s.values),
      type: 'line',
      name: s.name,
    }));
  }

  // have to add events alongside the points
  private createData = (values: Array<number>) => {
    return values.map((i, j) => ({
      x: j,
      y: i,
      events: {
        mouseOver: (event) => this.hoverHandler(event)
      }
    }));
  }

  private hoverHandler = (event: any) => {
    const e = event.target;
    this.selectPointHandler(e.series.name, e.x, e.y);
  }

  private clickHandler = ( p: {point: any}) => {
    this.selectPointHandler(p.point.series.name, p.point.x, p.point.y);
  }

  private selectPointHandler(name: string, xValue: number, yValue: number) {
    this.didSelectPoint.emit({
      name,
      xValue,
      yValue
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
