import { Injectable } from '@angular/core';

export interface ITimeSeries {
  name: string;
  values: Array<number>;
}

@Injectable()
export class SeriesService {

  constructor() { }


  public getSeries = (): Array<ITimeSeries> => {
    return [{
        name: 'First series',
        values: [1, 2, 1, 4, 3, 4, 3, 2, 6, 7, 8, 0, 5, 7, 9, 1]
      },
      {
        name: 'Second series',
        values: [1, 2, 1, 2, 2, 2, 3, 3, 4, 4, 4, 0, 1, 1, 2, 2]
        }
    ];


  }


}
