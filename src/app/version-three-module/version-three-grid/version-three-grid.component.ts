import { Component, OnInit } from '@angular/core';
import { SeriesService, ITimeSeries } from '../series.service';


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

  constructor(private seriesService: SeriesService) { }

  public ngOnInit(): void {
    this.setUpGrid();
  }

  private setUpGrid = () => {
    const s = this.seriesService.getSeries();

    this.columnDefs = this.createColumnDefs(s);
    this.rowData = this.createRowData(s);
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
    const create = (headerName, field, width = 70) => ({ headerName, field, width });

    const timeSteps = Array.from(series[0].values).map((_, j) => {
      return create(`t=${j + 1}`, `t${j}`);
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

}
