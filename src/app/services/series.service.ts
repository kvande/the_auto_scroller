import { Injectable } from '@angular/core';

export interface ITimeSeries {
  name: string;
  values: Array<number>;
}

@Injectable()
export class SeriesService {

  constructor() { }


  public getSeries = (): Array<ITimeSeries> => this.getnSeries(2, 15);


  public getnSeries = (numberOfSeries: number, numberOfValues: number) => {
    const seriesName = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh',
                          'Eighth', 'Ninth', 'Tenth', 'Eleventh', 'Twelfth' ]

    const series: Array<ITimeSeries> = [];
    const values: Array<number> = [];

    for (let i = 0; i < numberOfValues; i++) {
      values.push(i);
    }



    for (let i = 0; i < numberOfSeries; i++) {
      const name = i < seriesName.length ? `${seriesName[i]} series` : `Series ${i}`;

      series.push({
        name,
        values
      });
    }

    return series;
  }

}
