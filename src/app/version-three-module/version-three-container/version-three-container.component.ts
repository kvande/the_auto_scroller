import { Component, OnInit } from '@angular/core';
import { ISelectedPoint, IZoomRange } from 'src/app/interfaces/IForHighCharts';

@Component({
  selector: 'app-version-three-container',
  templateUrl: './version-three-container.component.html',
  styleUrls: ['./version-three-container.component.scss']
})
export class VersionThreeContainerComponent {

  public activeZoom: IZoomRange;


  public didZoom = (point: IZoomRange) => this.activeZoom = point;
}
