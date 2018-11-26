import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-version-one-container',
  templateUrl: './version-one-container.component.html',
  styleUrls: ['./version-one-container.component.scss']
})
export class VersionOneContainerComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {
    series: [{
      data: [1, 2, 3]
    }]
  };

  constructor() { }

  ngOnInit() {
  }

}
