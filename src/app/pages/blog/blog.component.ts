import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo/seo.service';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpService } from 'src/app/services/http/http.service';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  list: any;
  loading : boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private seoService: SeoService,
    private httpService: HttpService,
    private alertService: AlertService
  ) {

    this.route.queryParams.subscribe(url => {
      if (url.author__username) {
        this.getUserPosts(url.author__username);
      }
      else {
        this.getPosts();
      }
    });
  }

  ngOnInit(): void {
    this.seoService.updateTitle('Blog | Hackathon Türkiye');
    this.seoService.updateMeta('description', 'Hackathon, ideathon, datathon, makeathon, code fest, game jam yarışmaları ile ilgili tanımlara, tecrübelerimize blogumuzdan ulaşabilirsiniz.');
  }

  getPosts() {
    this.spinner.show();
    this.loading = true;
    this.httpService.getHighlightPosts('posts').subscribe((response) => {
      this.list = response.results;
      this.spinner.hide();
      this.loading = false;
    },
      (error: any) => {
        this.alertService.danger(error);
        this.spinner.hide();
        this.loading = false;
      });
  }

  getUserPosts(username: any) {
    this.spinner.show();
    this.loading = true;
    this.httpService.getHighlightPosts('posts/?author__username=' + username).subscribe((response) => {
      this.list = response.results;
      this.spinner.hide();
      this.loading = false;
    },
      (error: any) => {
        this.alertService.danger(error);
        this.spinner.hide();
        this.loading = false;
      });
  }

}
