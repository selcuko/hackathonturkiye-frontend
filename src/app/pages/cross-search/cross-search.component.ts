import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  crossesPost: any;
  crossesEvents: any;
  months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private seoService: SeoService,
    private alertService: AlertService) {

      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };

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
    this.crossesPost = response.in_posts;
    this.crossesEvents = response.in_events;
    this.spinner.hide();
    },
      (error: any) => {
        this.alertService.danger(error);
        this.spinner.hide();
      });
  }

  getDateTurkish(dateTime) {
    let date = new Date(dateTime);
    let dateStr = date.getDate() + " ";
    dateStr += this.months[date.getMonth()] + " ";
    return dateStr;
  }
  

}
