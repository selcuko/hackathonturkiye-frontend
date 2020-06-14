import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo/seo.service';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpService } from 'src/app/services/http/http.service';
import { Location } from '@angular/common';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list: any;
  
  constructor(
    private spinner: NgxSpinnerService,
    private seoService: SeoService,
    private httpService: HttpService,
    private location: Location,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Hackathon Turkiye');
    this.seoService.updateMeta('description', 'Hackathon, ideathon, makeathon, datathon, game jam yarışmalarına ve içeriklerinden Hackathon Türkiye sayfasından erişebilirsiniz.');
    this.location.replaceState('/');
    this.getPosts();
  }

  getPosts() {
    this.spinner.show();
    this.httpService.getHighlightPosts('posts/').subscribe((response) => {
      this.list = response.results;
      this.spinner.hide();
    },
      (error: any) => {
        this.alertService.danger(error)
        this.spinner.hide();
      });
  }

}
