import { Component, OnInit, Input } from '@angular/core';
import { ISelectedPoint, IZoomRange } from 'src/app/interfaces/IForHighCharts';
import { ITimeSeries, SeriesService } from 'src/app/services/series.service';


interface ILooseObject {
  [key: string]: any;
}

@Component({
  selector: 'app-version-four-grid',
  templateUrl: './version-four-grid.component.html',
  styleUrls: ['./version-four-grid.component.scss']
})
export class VersionFourGridComponent implements OnInit {

  public columnDefs: any;
  public rowData: any;
  public gridOptions: any;

  private allSeries: Array<ITimeSeries>;

  @Input()
  public set selectedPoint(value: ISelectedPoint) {
    this.setCellActive(value);
  }

  @Input()
  public set activeZoom(range: IZoomRange) {
    this.setAccordingToZoom(range);
  }

  constructor(private seriesService: SeriesService) { }

  public ngOnInit(): void {
    this.setUpGrid();
  }

  private setUpGrid = () => {
    this.allSeries = this.seriesService.getnSeries(8, 200);

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

  private getTag = (index: number) => `t${index}`;

  private createColumnDefs = (series: Array<ITimeSeries>) => {
    const create = (headerName, field, width = 75) => ({ headerName, field, width });

    const timeSteps = Array.from(series[0].values).map((_, j) => {
      return create(`t=${j}`, this.getTag(j));
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
      object[this.getTag(j)] = i;
    });

    return object;
  }

  private setCellActive = (event: ISelectedPoint) => {

    if (this.gridOptions) {
      const index = this.allSeries.findIndex(i => i.name === event.name);
      this.gridOptions.api.setFocusedCell(index, `t${event.xValue}`, null);
    }
  }

  private setAccordingToZoom = (range: IZoomRange) => {
    if (range) {


      // console.log(`Should zoom between ${range.minX} and ${range.maxX}`);
      // console.dir(range);

      // const index = Math.floor(range.minX);
      // console.log(index);
      // this.gridOptions.api.ensureColumnVisible(this.getTag(index + 10));





      // console.dir(`First displayed row ${this.gridOptions.api.getFirstDisplayedColumn()}`);
      // console.dir(`Last displayed row ${this.gridOptions.api.getLastDisplayedRow()}`);

      const b = this.gridOptions.columnApi.getAllDisplayedVirtualColumns();   // this is the one to use
      // const a = this.gridOptions.api.getAllDisplayedColumns();
      console.dir(b);
      // https://stackoverflow.com/questions/42811020/how-do-i-get-and-set-ag-grid-state
      // ensureColumnVisible
    }

  }

}
