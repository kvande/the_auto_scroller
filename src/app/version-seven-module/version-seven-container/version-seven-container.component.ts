import { Component, OnInit } from '@angular/core';
import { ISelectedPoint, IZoomRange } from 'src/app/interfaces/IForHighCharts';

@Component({
  selector: 'app-version-seven-container',
  templateUrl: './version-seven-container.component.html',
  styleUrls: ['./version-seven-container.component.scss'],
})
export class VersionSevenContainerComponent {

  public activeZoom: IZoomRange;
  public selectedPoint: ISelectedPoint;
  public hoverPoint: ISelectedPoint;

  public didZoom = (zoom: IZoomRange) => this.activeZoom = zoom;

  public didSelectPoint = (point: ISelectedPoint) => this.selectedPoint = point;

  public didHoverPoint = (point: ISelectedPoint) => this.hoverPoint = point;
}
