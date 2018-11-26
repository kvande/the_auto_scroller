import { Component, OnInit, Input } from '@angular/core';
import { ISelectedPoint } from 'src/app/interfaces/IForHighCharts';

@Component({
  selector: 'app-version-one-info',
  templateUrl: './version-one-info.component.html',
  styleUrls: ['./version-one-info.component.scss']
})
export class VersionOneInfoComponent implements OnInit {


  @Input()
  public selectedPoint: ISelectedPoint;

  constructor() { }

  ngOnInit() {
  }

}
