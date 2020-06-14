import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { SeoService } from '../../services/seo/seo.service';
import { NgxSpinnerService } from "ngx-spinner";
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  slug: string = "";
  event: any;

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
    this.getEvent();
    this.seoService.updateTitle('Anasayfa');
    this.seoService.updateMeta('description', 'Anasayfa açıklamasıdır.');
  }

  getEvent() {
    this.spinner.show();
    const url = "events/" + this.slug;
    this.httpService.search(url).subscribe((response) => {
      this.event = response;
      this.spinner.hide();
    },
      (error: any) => {
        this.alertService.danger(error);
        this.spinner.hide();
      });
  }

}
