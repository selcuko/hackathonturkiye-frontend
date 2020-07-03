import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-google-analytics-gtag',
  template: '',
})
export class GoogleAnalyticsGTagComponent {
  trackingCode = environment.trackCode;

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    private readonly renderer: Renderer2,
    private readonly el: ElementRef,
  ) {
    // BROWSER
    if (isPlatformBrowser(this.platformId)) {
      const script = this.renderer.createElement('script') as HTMLScriptElement;
      script.src = `https://googletagmanager.com/gtag/js?id=${this.trackingCode}`;
      script.async = true;
      this.renderer.appendChild(this.el.nativeElement, script);

      const script2 = this.renderer.createElement('script') as HTMLScriptElement;
      const scriptBody = this.renderer.createText(`
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', '${this.trackingCode}');
      `);
      this.renderer.appendChild(script2, scriptBody);
      this.renderer.appendChild(this.el.nativeElement, script2);
    }
  }
}
