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

  private createChartSeries = (): Array<{type: string, data: Array<number>}> => {
    return  this.seriesService.getSeries().map(s => ( {
      data: [...s.values],
      type: 'line',
      name: s.name
    }));
  }


  private zoomed = (event: any) => {
    if (event.resetSelection) { return; }

    console.dir(event);

    this.didZoom.emit({
      minX: event.xAxis[0].min,
      maxX: event.xAxis[0].max,
      minY: event.yAxis[0].min,
      maxY: event.yAxis[0].max
    });
  }

}
