import { Injectable } from '@angular/core';

export interface ITimeSeries {
  name: string;
  values: Array<number>;
}

interface ICachedSeries {
  name: string;
  values: Array<number>;
}

@Injectable()
export class SeriesService {


  // create a place holder for data so that if request by several sources they will recive the same data (with a lot of assumptions)
  private seriesCache: Array<ICachedSeries> = [];

  constructor() { }


  public getSeries = (): Array<ITimeSeries> => this.getnSeries(2, 15);


  public getnSeries = (numberOfSeries: number, numberOfValues: number) => {
    const seriesName = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh',
                          'Eighth', 'Ninth', 'Tenth', 'Eleventh', 'Twelfth' ]

    const series: Array<ITimeSeries> = [];

    for (let i = 0; i < numberOfSeries; i++) {
      const name = i < seriesName.length ? `${seriesName[i]} series` : `Series ${i}`;

      series.push(this.getSeriesFromCache(name, numberOfValues));
    }

    return series;
  }

  private getSeriesFromCache(name: string, numberOfValues: number) {
    const match = this.seriesCache.find(s => s.name === name && s.values.length === numberOfValues);

    return match ? match : this.addToCache(name, numberOfValues);
  }

  // random number gave a bit too much mess, try to calm everything down a bit
  private addToCache = (name: string, numberOfValues: number): ICachedSeries => {
    let values = [];

    for (let i = 0; i <= numberOfValues; i++) {
      const length = Math.floor(Math.random() * 10) + 1;
      const max = Math.floor(Math.random() * 10);
      const min = max - 1;
      const next = this.getValueWithinRange(min, max);

      for (let j = 0; j < length; j++) {
        values.push(next);
      }

      if (values.length > numberOfValues ) {
        break;
      }
    }

    // probably to long
    values = values.slice(0, numberOfValues);

    const c: ICachedSeries = ({ name, values });
    this.seriesCache.push(c);
    return c;

  }

  private getValueWithinRange = (min: number, max: number) => {
    if (min < 0) {
      min = 0;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
