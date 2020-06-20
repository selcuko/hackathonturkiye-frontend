import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { DisqusModule } from 'ngx-disqus';

@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    FormsModule,
    DisqusModule
  ]
})
export class EventModule { }
