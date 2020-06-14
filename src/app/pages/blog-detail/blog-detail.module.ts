import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { BlogDetailRoutingModule } from './blog-detail-routing.module';
import { BlogDetailComponent } from './blog-detail.component';

@NgModule({
  declarations: [BlogDetailComponent],
  imports: [
    CommonModule,
    BlogDetailRoutingModule,
    FormsModule
  ]
})
export class BlogDetailModule { }
