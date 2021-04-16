import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

import { HttpClientModule } from '@angular/common/http';

import { AlertModule } from 'ngx-alerts';

import { GoogleAnalyticsGTagComponent } from './components/analytics/google-analytics.component';

import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    GoogleAnalyticsGTagComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'hackathonturkiye' }),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule,
    AlertModule.forRoot({ maxMessages: 1, timeout: 2000, position: 'left' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
