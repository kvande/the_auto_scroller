import { Component, OnInit } from '@angular/core';
import { ISelectedPoint } from 'src/app/interfaces/IForHighCharts';

@Component({
  selector: 'app-version-one-container',
  templateUrl: './version-one-container.component.html',
  styleUrls: ['./version-one-container.component.scss']
})
export class VersionOneContainerComponent {

  public selectedPoint: ISelectedPoint;


  public didSelectPoint = (point: ISelectedPoint) => this.selectedPoint = point;
}
