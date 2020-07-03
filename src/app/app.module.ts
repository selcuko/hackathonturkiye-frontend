import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

import { HttpClientModule } from '@angular/common/http';

import { AlertModule } from 'ngx-alerts';

import { HeaderComponent } from './components/header/header.component';
import { GoogleAnalyticsGTagComponent } from './components/analytics/google-analytics.component';

import { FooterComponent } from './components/footer/footer.component';

import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from '@angular/forms';

import { DISQUS_SHORTNAME } from 'ngx-disqus';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    GoogleAnalyticsGTagComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'hackathonturkiye' }),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule,
    AlertModule.forRoot({maxMessages: 1, timeout: 2000, position: 'left'})
  ],
  providers: [
    { provide: DISQUS_SHORTNAME, useValue: 'hackathon-turkiye' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
