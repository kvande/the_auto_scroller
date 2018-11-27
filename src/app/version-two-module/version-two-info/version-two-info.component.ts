import { Component, OnInit, Input } from '@angular/core';
import { IZoomRange } from 'src/app/interfaces/IForHighCharts';

@Component({
  selector: 'app-version-two-info',
  templateUrl: './version-two-info.component.html',
  styleUrls: ['./version-two-info.component.scss']
})
export class VersionTwoInfoComponent implements OnInit {


  @Input()
  public activeZoom: IZoomRange;

  constructor() { }

  ngOnInit() {
  }

}
