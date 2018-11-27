import { Component, OnInit, Input } from '@angular/core';
import { SeriesService, ITimeSeries } from '../series.service';
import { ISelectedPoint, IZoomRange } from 'src/app/interfaces/IForHighCharts';


interface ILooseObject {
  [key: string]: any;
}

@Component({
  selector: 'app-version-three-grid',
  templateUrl: './version-three-grid.component.html',
  styleUrls: ['./version-three-grid.component.scss']
})
export class VersionThreeGridComponent implements OnInit {

  public columnDefs: any;
  public rowData: any;
  public gridOptions: any;

  private allSeries: Array<ITimeSeries>;

  @Input()
  public set selectedPoint(value: ISelectedPoint) {
    this.setCellActive(value);
  }

  @Input()
  public set activeZoom(value: IZoomRange) {
    console.log('did zoom');
  }

  constructor(private seriesService: SeriesService) { }

  public ngOnInit(): void {
    this.setUpGrid();
  }

  private setUpGrid = () => {
    this.allSeries = this.seriesService.getSeries();

    this.columnDefs = this.createColumnDefs(this.allSeries);
    this.rowData = this.createRowData(this.allSeries);
    this.gridOptions = this.createGridOptions();
  }

  private createGridOptions = () => {
    return {
      enableColResize: false,
      enableFilter: false,
      enableSorting: false,
      // editType: 'node'
    };
  }


  private createColumnDefs = (series: Array<ITimeSeries>) => {
    const create = (headerName, field, width = 65) => ({ headerName, field, width });

    const timeSteps = Array.from(series[0].values).map((_, j) => {
      return create(`t=${j}`, `t${j}`);
    });

    return [create('Series name', 'name', 150), ...timeSteps];
  }

  private createRowData = (series: Array<ITimeSeries>) => {
    return series.map(s => this.createRowDataForSeries(s));
  }

  private createRowDataForSeries = (series: ITimeSeries) => {
    const object: ILooseObject = {};

    object['name'] = series.name;

    series.values.forEach((i, j) => {
      object[`t${j}`] = i;
    });

    return object;
  }

  private setCellActive = (event: ISelectedPoint) => {
    if (this.gridOptions) {
      const index = this.allSeries.findIndex(i => i.name === event.name);
      this.gridOptions.api.setFocusedCell(index, `t${event.xValue}`, null);
    }

  }

}
