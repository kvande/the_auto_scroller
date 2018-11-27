import { Component, OnInit } from '@angular/core';
import { ISelectedPoint } from 'src/app/interfaces/IForHighCharts';

@Component({
  selector: 'app-version-two-container',
  templateUrl: './version-two-container.component.html',
  styleUrls: ['./version-two-container.component.scss']
})
export class VersionTwoContainerComponent {

  public selectedPoint: ISelectedPoint;


  public didSelectPoint = (point: ISelectedPoint) => this.selectedPoint = point;
}
