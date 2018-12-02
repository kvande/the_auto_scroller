import { Component, OnInit } from '@angular/core';
import { ISelectedPoint, IZoomRange } from 'src/app/interfaces/IForHighCharts';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-version-six-container',
  templateUrl: './version-six-container.component.html',
  styleUrls: ['./version-six-container.component.scss'],
})
export class VersionSixContainerComponent {

  public activeZoom: IZoomRange;
  public selectedPoint: ISelectedPoint;
  public hoverPoint: ISelectedPoint;

  public didZoom = (zoom: IZoomRange) => this.activeZoom = zoom;

  public didSelectPoint = (point: ISelectedPoint) => this.selectedPoint = point;

  public didHoverPoint = (point: ISelectedPoint) => this.hoverPoint = point;
}
