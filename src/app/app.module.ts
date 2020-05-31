import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

import { HttpClientModule } from '@angular/common/http';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { NgxSpinnerModule } from "ngx-spinner";
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    ScrollTopComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'hackathonturkiye' }),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
