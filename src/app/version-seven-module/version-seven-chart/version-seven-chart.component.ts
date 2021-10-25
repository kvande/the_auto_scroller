import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ISelectedPoint, IZoomRange } from 'src/app/interfaces/IForHighCharts';
import { SeriesService } from 'src/app/services/series.service';


@Component({
  selector: 'app-version-seven-chart',
  templateUrl: './version-seven-chart.component.html',
  styleUrls: ['./version-seven-chart.component.scss']
})
export class VersionSevenChartComponent implements OnInit {


  public updateFromInput = false;

  @Output()
  public didZoom = new EventEmitter<IZoomRange>();

  @Output()
  public didSelectPoint = new EventEmitter<ISelectedPoint>();

  @Output()
  public didHoverPoint = new EventEmitter<ISelectedPoint>();

  @Input()
  public set selectedPoint(value: ISelectedPoint) {
    // nothing seems to work here, quiting this for now
  }

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
        }
      }
    };

    this.chartOptions.chart = {
      zoomType: 'xy',
      events: {
        selection: (event) => this.zoomHandler(event),
      },
      backgroundColor: '#302e2e'
    };

    this.chartOptions = {...this.getTheme(), ...this.chartOptions};
  }

  private createChartSeries = (): Array<{type: string, data: Array<any>}> => {
    return  this.seriesService.getnSeries(3, 60).map(s => ( {
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
    const series = event.target.series;

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

  // got it from https://www.highcharts.com/demo/line-labels/dark-unica
  private getTheme = () => {
    return {
      colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
          '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
      chart: {
          backgroundColor: {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
              stops: [
                  [0, '#2a2a2b'],
                  [1, '#3e3e40']
              ]
          },
          style: {
              fontFamily: '\'Unica One\', sans-serif'
          },
          plotBorderColor: '#606063'
      },
      title: {
          style: {
              color: '#E0E0E3',
              textTransform: 'uppercase',
              fontSize: '20px'
          }
      },
      subtitle: {
          style: {
              color: '#E0E0E3',
              textTransform: 'uppercase'
          }
      },
      xAxis: {
          gridLineColor: '#707073',
          labels: {
              style: {
                  color: '#E0E0E3'
              }
          },
          lineColor: '#707073',
          minorGridLineColor: '#505053',
          tickColor: '#707073',
          title: {
              style: {
                  color: '#A0A0A3'

              }
          }
      },
      yAxis: {
          gridLineColor: '#707073',
          labels: {
              style: {
                  color: '#E0E0E3'
              }
          },
          lineColor: '#707073',
          minorGridLineColor: '#505053',
          tickColor: '#707073',
          tickWidth: 1,
          title: {
              style: {
                  color: '#A0A0A3'
              }
          }
      },
      tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          style: {
              color: '#F0F0F0'
          }
      },
      plotOptions: {
          series: {
              dataLabels: {
                  color: '#B0B0B3'
              },
              marker: {
                  lineColor: '#333'
              }
          },
          boxplot: {
              fillColor: '#505053'
          },
          candlestick: {
              lineColor: 'white'
          },
          errorbar: {
              color: 'white'
          }
      },
      legend: {
          itemStyle: {
              color: '#E0E0E3'
          },
          itemHoverStyle: {
              color: '#FFF'
          },
          itemHiddenStyle: {
              color: '#606063'
          }
      },
      credits: {
          style: {
              color: '#666'
          }
      },
      labels: {
          style: {
              color: '#707073'
          }
      },

      drilldown: {
          activeAxisLabelStyle: {
              color: '#F0F0F3'
          },
          activeDataLabelStyle: {
              color: '#F0F0F3'
          }
      },

      navigation: {
          buttonOptions: {
              symbolStroke: '#DDDDDD',
              theme: {
                  fill: '#505053'
              }
          }
      },

      // scroll charts
      rangeSelector: {
          buttonTheme: {
              fill: '#505053',
              stroke: '#000000',
              style: {
                  color: '#CCC'
              },
              states: {
                  hover: {
                      fill: '#707073',
                      stroke: '#000000',
                      style: {
                          color: 'white'
                      }
                  },
                  select: {
                      fill: '#000003',
                      stroke: '#000000',
                      style: {
                          color: 'white'
                      }
                  }
              }
          },
          inputBoxBorderColor: '#505053',
          inputStyle: {
              backgroundColor: '#333',
              color: 'silver'
          },
          labelStyle: {
              color: 'silver'
          }
      },

      navigator: {
          handles: {
              backgroundColor: '#666',
              borderColor: '#AAA'
          },
          outlineColor: '#CCC',
          maskFill: 'rgba(255,255,255,0.1)',
          series: {
              color: '#7798BF',
              lineColor: '#A6C7ED'
          },
          xAxis: {
              gridLineColor: '#505053'
          }
      },

      scrollbar: {
          barBackgroundColor: '#808083',
          barBorderColor: '#808083',
          buttonArrowColor: '#CCC',
          buttonBackgroundColor: '#606063',
          buttonBorderColor: '#606063',
          rifleColor: '#FFF',
          trackBackgroundColor: '#404043',
          trackBorderColor: '#404043'
      },

      // special colors for some of the
      legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
      background2: '#505053',
      dataLabelsColor: '#B0B0B3',
      textColor: '#C0C0C0',
      contrastTextColor: '#F0F0F3',
      maskColor: 'rgba(255,255,255,0.3)'
  };
  }
}
