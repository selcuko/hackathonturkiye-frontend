import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { SeoService } from '../../services/seo/seo.service';
import { NgxSpinnerService } from "ngx-spinner";
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  slug: string = "";
  blogdetail: any;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private spinner: NgxSpinnerService,
    private seoService: SeoService,
    private alertService: AlertService) {

    this.route.params.subscribe(url => {
      this.slug = url['slug'] || "";
    });
  }

  ngOnInit(): void {
    this.getBlogDetail();
  }

  getBlogDetail() {
    this.spinner.show();
    const url = "posts/" + this.slug;
    this.httpService.search(url).subscribe((response) => {
      this.blogdetail = response;
      this.spinner.hide();

      this.seoService.updateTitle(this.blogdetail.title);
      this.seoService.updateMeta('description', this.blogdetail.summary);
    },
      (error: any) => {
        this.alertService.danger(error);
        this.spinner.hide();
      });
  }

}
