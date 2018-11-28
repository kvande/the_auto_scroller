import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ISelectedPoint, IZoomRange } from 'src/app/interfaces/IForHighCharts';
import { SeriesService } from 'src/app/services/series.service';


@Component({
  selector: 'app-version-five-chart',
  templateUrl: './version-five-chart.component.html',
  styleUrls: ['./version-five-chart.component.scss']
})
export class VersionFiveChartComponent implements OnInit {

  @Output()
  public didZoom = new EventEmitter<IZoomRange>();

  @Output()
  public didSelectPoint = new EventEmitter<ISelectedPoint>();

  @Output()
  public didHoverPoint = new EventEmitter<ISelectedPoint>();


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
          legendItemClick: (event) => this.doubleClickHandler(event)  // use double click in the future
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
    return  this.seriesService.getnSeries(4, 100).map(s => ( {
      data: this.createData(s.values),
      type: 'line',
      name: s.name,
      // color: 'red'

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
    const series = event.target.series;

    // TODO:  LAG VERSION 6

    // series.options.color = "black";

    // må få tak i serien her, og sette
    // console.dir(series); //.series; = 'black';

    this.didHoverPoint.emit({
      name: e.series.name,
      color: e.color,
      xValue: e.x,
      yValue: e.y
    });
  }

  private clickHandler = ( p: {point: any}) => {
    this.didSelectPoint.emit({
      name: p.point.series.name,
      xValue: p.point.x,
      yValue: p.point.y
    });
  }

  private doubleClickHandler = (p: any) =>  {
    console.dir(p);
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
