import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public isGreen = false;

  public changeColor = () => {
    this.isGreen = !this.isGreen;


    console.log(`Status er nå ${this.isGreen}`);
  }
}
