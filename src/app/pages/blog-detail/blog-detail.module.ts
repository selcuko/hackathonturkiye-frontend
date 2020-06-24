import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { BlogDetailRoutingModule } from './blog-detail-routing.module';
import { BlogDetailComponent } from './blog-detail.component';
import { DisqusModule } from 'ngx-disqus';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

import { SafePipe } from 'src/app/pages/blog-detail/safe';

@NgModule({
  declarations: [BlogDetailComponent, SafePipe],
  imports: [
    CommonModule,
    BlogDetailRoutingModule,
    FormsModule,
    DisqusModule
  ],
  providers: [SafePipe],
  exports: [SafePipe]
})
export class BlogDetailModule { }
