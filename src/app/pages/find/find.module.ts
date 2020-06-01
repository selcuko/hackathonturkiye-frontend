import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { FindRoutingModule } from './find-routing.module';
import { FindComponent } from './find.component';


@NgModule({
  declarations: [FindComponent],
  imports: [
    CommonModule,
    FindRoutingModule,
    FormsModule
  ]
})
export class FindModule { }
