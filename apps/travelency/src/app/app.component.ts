import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'trav-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mainNavIsShown$: Observable<boolean>;

  constructor(private readonly route: Router) {}

  ngOnInit(): void {
    this.mainNavIsShown$ = this.route.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => (this.route.url !== '/' ? true : false))
    );
  }
}
