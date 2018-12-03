import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  public isDark = false;

  constructor(private router: Router) {}

  public ngOnInit() {
    this.router.events.subscribe(i => {

      if (i instanceof NavigationEnd)  {
        this.isDark = i.url.toLowerCase().includes('six');
      }
    });

  }
}
