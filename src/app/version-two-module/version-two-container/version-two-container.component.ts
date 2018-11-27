import { Component, OnInit } from '@angular/core';
import { ISelectedPoint, IZoomRange } from 'src/app/interfaces/IForHighCharts';

@Component({
  selector: 'app-version-two-container',
  templateUrl: './version-two-container.component.html',
  styleUrls: ['./version-two-container.component.scss']
})
export class VersionTwoContainerComponent {

  public activeZoom: IZoomRange;


  public didZoom = (point: IZoomRange) => this.activeZoom = point;
}
