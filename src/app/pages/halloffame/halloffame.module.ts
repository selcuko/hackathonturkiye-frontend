import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HallOfFameRoutingModule } from './halloffame-routing.module';
import { HallOfFameComponent } from './halloffame.component';


@NgModule({
  declarations: [HallOfFameComponent],
  imports: [
    CommonModule,
    HallOfFameRoutingModule
  ]
})
export class HallOfFameModule { }
