import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { BlogDetailRoutingModule } from './blog-detail-routing.module';
import { BlogDetailComponent } from './blog-detail.component';

import { SafePipe } from 'src/app/pages/blog-detail/safe';

@NgModule({
  declarations: [BlogDetailComponent, SafePipe],
  imports: [
    CommonModule,
    BlogDetailRoutingModule,
    FormsModule
  ],
  providers: [SafePipe],
  exports: [SafePipe]
})
export class BlogDetailModule { }
