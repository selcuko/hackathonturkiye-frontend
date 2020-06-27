import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

// declare google analytics
declare const ga: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private router: Router) {}


  ngAfterViewInit(): void {
    this.initGoogleAnalyticsPageView();
  }

  private initGoogleAnalyticsPageView() {
    const interval = setInterval(() => {
      if ((window as any).ga && (window as any).ga.getAll) {
        this.router.events.subscribe(event => {
          const ga = (window as any).ga
          if (event instanceof NavigationEnd && isPlatformBrowser(this.platformId)) {
            const tracker = ga.getAll()[0]
            tracker.set('page', event.urlAfterRedirects)
            tracker.send('pageview')
          }
        })
        clearInterval(interval)
      }
    }, 50)
  }
}
