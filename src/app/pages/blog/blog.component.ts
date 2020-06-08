import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo/seo.service';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  list:any;

  constructor(
    private spinner: NgxSpinnerService,
    private seoService: SeoService,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Blog');
    this.seoService.updateMeta('description', 'Blog açıklamasıdır.');
    this.getPosts();
  }

  getPosts() {
    this.spinner.show();
    
    this.httpService.getHighlightPosts('posts').subscribe((response) => {
      this.list = response.results;
      this.spinner.hide();
    },
      (error: any) => {
        console.log(error);
        this.spinner.hide();
      });
  }

}
