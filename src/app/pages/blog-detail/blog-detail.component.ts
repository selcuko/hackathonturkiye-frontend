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

    this.route.params.subscribe(d => {
      this.slug = d['slug'] || "";
    });
  }

  ngOnInit(): void {
    this.getBlogDetail();
    this.seoService.updateTitle('Anasayfa');
    this.seoService.updateMeta('description', 'Anasayfa açıklamasıdır.');
  }

  getBlogDetail() {
    this.spinner.show();
    const url = "posts/" + this.slug;
    this.httpService.search(url).subscribe((response) => {
      this.blogdetail = response;
      this.spinner.hide();
    },
      (error: any) => {
        this.alertService.danger(error);
        this.spinner.hide();
      });
  }

}
