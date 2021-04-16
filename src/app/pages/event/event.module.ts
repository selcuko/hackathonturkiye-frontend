import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';

@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    FormsModule
  ]
})
export class EventModule { }
