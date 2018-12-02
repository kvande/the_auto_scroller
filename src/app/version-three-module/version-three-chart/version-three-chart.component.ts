import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ISelectedPoint, IZoomRange } from 'src/app/interfaces/IForHighCharts';
import { SeriesService } from '../../services/series.service';


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
          click: (event) => this.clickHandler(event),
        },
      }
    };
  }

  private createChartSeries = (): Array<{type: string, data: Array<any>}> => {
    return  this.seriesService.getSeries().map(s => ( {
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

}
