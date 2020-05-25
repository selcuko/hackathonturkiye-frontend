import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from './services/common/global-error-handler';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    LoadingSpinnerComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'hackathonturkiye' }),
    AppRoutingModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
