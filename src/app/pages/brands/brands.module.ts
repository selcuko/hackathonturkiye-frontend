import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsComponent } from './brands.component';


@NgModule({
  declarations: [BrandsComponent],
  imports: [
    CommonModule,
    BrandsRoutingModule
  ]
})
export class BrandsModule { }
