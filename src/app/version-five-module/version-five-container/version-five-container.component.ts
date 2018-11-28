import { Component, OnInit } from '@angular/core';
import { ISelectedPoint, IZoomRange } from 'src/app/interfaces/IForHighCharts';

@Component({
  selector: 'app-version-five-container',
  templateUrl: './version-five-container.component.html',
  styleUrls: ['./version-five-container.component.scss']
})
export class VersionFiveContainerComponent {

  public activeZoom: IZoomRange;
  public selectedPoint: ISelectedPoint;
  public hoverPoint: ISelectedPoint;

  public didZoom = (zoom: IZoomRange) => this.activeZoom = zoom;

  public didSelectPoint = (point: ISelectedPoint) => this.selectedPoint = point;

  public didHoverPoint = (point: ISelectedPoint) => this.hoverPoint = point;
}
