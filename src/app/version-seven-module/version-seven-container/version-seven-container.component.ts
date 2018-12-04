import { Component, OnInit } from '@angular/core';
import { ISelectedPoint, IZoomRange } from 'src/app/interfaces/IForHighCharts';

@Component({
  selector: 'app-version-seven-container',
  templateUrl: './version-seven-container.component.html',
  styleUrls: ['./version-seven-container.component.scss'],
})
export class VersionSevenContainerComponent {

  public activeZoom: IZoomRange;
  public selectedChartPoint: ISelectedPoint;
  public hoverChartPoint: ISelectedPoint;

  public selectedGridPoint: ISelectedPoint;


  public didZoom = (zoom: IZoomRange) => this.activeZoom = zoom;

  public didSelectChartPoint = (point: ISelectedPoint) => this.selectedChartPoint = point;

  public didHoverChartPoint = (point: ISelectedPoint) => this.hoverChartPoint = point;

  public didSelectGridPoint = (point: ISelectedPoint) => this.selectedGridPoint = point;

}
