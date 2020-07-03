import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { SeoService } from '../../services/seo/seo.service';
import { NgxSpinnerService } from "ngx-spinner";
import { AlertService } from 'ngx-alerts';
import { SafePipe } from 'src/app/pages/blog-detail/safe';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
  providers: [SafePipe]
})
export class BlogDetailComponent implements OnInit {

  pageId: string = '';
  slug: string = '';
  blogdetail: any;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private spinner: NgxSpinnerService,
    private seoService: SeoService,
    private alertService: AlertService) {

    this.route.params.subscribe(url => {
      this.slug = url['slug'] || '';
    });
  }

  ngOnInit(): void {
    this.getBlogDetail();
    this.pageId = this.slug;
  }

  getBlogDetail() {
    this.spinner.show();
    this.loading = true;
    const url = 'posts/' + this.slug;
    this.httpService.search(url).subscribe((response) => {
      this.blogdetail = response;
      this.seoService.updateTitle(this.blogdetail.title);
      this.seoService.addMeta('description', this.blogdetail.summary);
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
