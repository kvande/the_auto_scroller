import { Component, OnInit } from '@angular/core';
import { ISelectedPoint, IZoomRange } from 'src/app/interfaces/IForHighCharts';

@Component({
  selector: 'app-version-four-container',
  templateUrl: './version-four-container.component.html',
  styleUrls: ['./version-four-container.component.scss']
})
export class VersionFourContainerComponent {

  public activeZoom: IZoomRange;
  public selectedPoint: ISelectedPoint;

  public didZoom = (zoom: IZoomRange) => this.activeZoom = zoom;

  public didSelectPoint = (point: ISelectedPoint) => this.selectedPoint = point;
}
