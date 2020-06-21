import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CrossSearchRoutingModule } from './cross-search-routing.module';
import { CrossSearchComponent } from './cross-search.component';

@NgModule({
  declarations: [CrossSearchComponent],
  imports: [
    CommonModule,
    CrossSearchRoutingModule,
    FormsModule
  ]
})
export class CrossSearchModule { }
