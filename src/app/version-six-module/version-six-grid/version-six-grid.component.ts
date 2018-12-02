import { Component, OnInit, Input } from '@angular/core';
import { ISelectedPoint, IZoomRange } from 'src/app/interfaces/IForHighCharts';
import { ITimeSeries, SeriesService } from 'src/app/services/series.service';


interface ILooseObject {
  [key: string]: any;
}

interface IActiveSeries {
  name: string;
  color?: string;
}

@Component({
  selector: 'app-version-six-grid',
  templateUrl: './version-six-grid.component.html',
  styleUrls: ['./version-six-grid.component.scss']
})
export class VersionSixGridComponent implements OnInit {

  public columnDefs: any;
  public rowData: any;
  public gridOptions: any;

  private allSeries: Array<ITimeSeries>;
  private activeSeries: IActiveSeries;

  private agGridApi: any;
  private agGridColumnApi: any;
  private firstColumnTag  = 'series-name';

  @Input()
  public set selectedPoint(value: ISelectedPoint) {
    this.setCellActive(value);
  }

  @Input()
  public set hoverPoint(value: ISelectedPoint) {
    this.setCellHoverState(value);
  }

  @Input()
  public set activeZoom(range: IZoomRange) {
    this.setAccordingToZoom(range);
  }

  constructor(private seriesService: SeriesService) { }

  public ngOnInit(): void {
    this.setUpGrid();
  }

  // ag-grid hook
  public onGridReady = (params) => {
    this.agGridApi = params.api;
    this.agGridColumnApi = params.columnApi;
  }

  private setUpGrid = () => {
    this.allSeries = this.seriesService.getnSeries(4, 60);

    this.columnDefs = this.createColumnDefs(this.allSeries);
    this.rowData = this.createRowData(this.allSeries);
    this.gridOptions = this.createGridOptions();
  }

  private createGridOptions = () => {
    return {
      enableColResize: false,
      enableFilter: false,
      enableSorting: false,
      getRowStyle: (params: any) => {

        const activeStyle = {
          'color': (this.activeSeries) ? this.activeSeries.color : 'black',
          'font-style': 'italic',
          'font-size': '13px'
        };

        const passiveStyle = {
          'color': 'gray',
          'font-style': 'normal',
          'font-size': '12px'
        };

        const p = params.data[this.firstColumnTag];
        return (this.activeSeries && p === this.activeSeries.name) ? activeStyle : passiveStyle;
      }
    };
  }

  private getTag = (index: number) => `t${index}`;

  private getIndex = (tag: string) => tag.replace('t', '');

  private createColumnDefs = (series: Array<ITimeSeries>) => {
    const create = (headerName, field, width = 75) => ({ headerName, field, width });

    const timeSteps = Array.from(series[0].values).map((_, j) => {
      return create(`t=${j}`, this.getTag(j));
    });

    // should be pinned to the left
    const firstColumn = {...create('Series name', this.firstColumnTag, 150), ...{pinned: 'left'}};

    return [firstColumn, ...timeSteps];
  }

  private createRowData = (series: Array<ITimeSeries>) => {
    return series.map(s => this.createRowDataForSeries(s));
  }

  private createRowDataForSeries = (series: ITimeSeries) => {
    const object: ILooseObject = {};

    object[this.firstColumnTag] = series.name;

    series.values.forEach((i, j) => {
      object[this.getTag(j)] = i;
    });

    return object;
  }

  private setCellActive = (event: ISelectedPoint) => {

    if (this.gridOptions) {
      const index = this.allSeries.findIndex(i => i.name === event.name);
      const tag = this.getTag(event.xValue);
      this.gridOptions.api.setFocusedCell(index, tag, null);
      this.gridOptions.api.ensureColumnVisible(tag);
    }
  }

  private setCellHoverState = (event: ISelectedPoint) => {

    if (this.gridOptions) {

      this.activeSeries = {name: event.name, color: event.color};
      const index = this.allSeries.findIndex(i => i.name === event.name);
      this.gridOptions.api.setFocusedCell(index, `t${event.xValue}`, null);

      // had to do a redrawRows, refreshCells did not suffice
      // https://www.ag-grid.com/javascript-grid-refresh/
      this.agGridApi.redrawRows({force: true});
    }
  }

  // when first column is pinned, the last column in 'getAllDisplayedVirtualColumns' will
  // be 'firstColumnTag', not sure why, but that is how it rolls
  private setAccordingToZoom = (range: IZoomRange) => {
    if (range) {
      console.table(range);

      const currentColumns: Array<any> = this.gridOptions.columnApi.getAllDisplayedVirtualColumns();
      let first = currentColumns[0].colId;
      let last = currentColumns[currentColumns.length - 1].colId;
      last = last !== this.firstColumnTag ? last :  currentColumns[currentColumns.length - 2].colId;

      // try to put the focus somewhere in the middle of the range. To achive that have to know
      // it moving to lower of higher x-value
      first = this.getIndex(first);
      last = this.getIndex(last);
      const diff = last - first;
      const zoomMin = Math.floor(range.minX);
      let delta = first < zoomMin ? zoomMin + diff : zoomMin;

      delta = delta > 0 ? delta : 0;
      this.gridOptions.api.ensureColumnVisible(this.getTag(delta));
    }

  }

}
