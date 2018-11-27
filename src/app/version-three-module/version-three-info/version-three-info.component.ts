import { Component, OnInit, Input } from '@angular/core';
import { IZoomRange } from 'src/app/interfaces/IForHighCharts';

@Component({
  selector: 'app-version-three-info',
  templateUrl: './version-three-info.component.html',
  styleUrls: ['./version-three-info.component.scss']
})
export class VersionThreeInfoComponent implements OnInit {


  @Input()
  public activeZoom: IZoomRange;

  constructor() { }

  ngOnInit() {
  }

}
