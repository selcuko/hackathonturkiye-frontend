import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { SeoService } from '../../services/seo/seo.service';
import { NgxSpinnerService } from "ngx-spinner";
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-cross-search',
  templateUrl: './cross-search.component.html',
  styleUrls: ['./cross-search.component.css']
})
export class CrossSearchComponent implements OnInit {
  
  slug: string = '';
  crosses: any;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private spinner: NgxSpinnerService,
    private seoService: SeoService,
    private alertService: AlertService) {

      this.route.params.subscribe(url => {
        this.slug = url['param'] || '';
      });
  }

  ngOnInit(): void {
   this.getResults();
  }

  getResults() {
    this.spinner.show();
    const url = 'tagsearch/' + this.slug;
    this.httpService.search(url).subscribe((response) => {
    this.crosses = response;
    this.spinner.hide();
    },
      (error: any) => {
        this.alertService.danger(error);
        this.spinner.hide();
      });
  }

}
