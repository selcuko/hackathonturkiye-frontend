import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurcrewRoutingModule } from './ourcrew-routing.module';
import { OurcrewComponent } from './ourcrew.component';


@NgModule({
  declarations: [OurcrewComponent],
  imports: [
    CommonModule,
    OurcrewRoutingModule
  ]
})
export class OurcrewModule { }
