import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'pb-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  @ViewChild('main', { static: false }) mainEl: ElementRef;

  scrollPositionBelowHeaderEl = false;

  constructor() {}

  ngOnInit() {}

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: Event) {
    const scrollPosition = window.pageYOffset;
    console.log(scrollPosition);
    console.log('el', this.mainEl.nativeElement.offsetTop);

    if (scrollPosition >= this.mainEl.nativeElement.offsetTop) {
      console.log('true');

      this.scrollPositionBelowHeaderEl = true;
    } else {
      this.scrollPositionBelowHeaderEl = false;
    }
  }
}
