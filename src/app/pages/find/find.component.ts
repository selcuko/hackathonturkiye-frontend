import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import * as moment from 'moment';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  eventType: string = "";
  eventLoc: string = "";
  tags: [];
  status: string;
  events: Array<any>;
  months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

  constructor(
    private route: ActivatedRoute, 
    private httpService: HttpService, 
    private router: Router, 
    private spinner: NgxSpinnerService) {

    this.route.params.subscribe(d => {
      this.eventType = d['etype'] || "";
      this.eventLoc = d['eloc'] || "";
    });

    this.route.queryParams.subscribe(d => {

      if (d['etiketler']) {
        this.tags = d['etiketler'].split(',');
      }
      else {
        this.tags = [];
      }

      this.status = d['durumu'] || "";
    });

  }
  ngOnInit(): void {
    this.getEvents();
    //console.log(moment().format());
    // this.seoService.updateTitle('Anasayfa');
    // this.seoService.updateMeta('description', 'Anasayfa açıklamasıdır.');
  }

  navigate() {
    this.router.navigate(['/etkinlikler/' + this.eventType + '/' + this.eventLoc]);
  }

  getDateTurkish(dateTime) {
    let date = new Date(dateTime);
    let dateStr = date.getDate() + " ";
    dateStr += this.months[date.getMonth()] + " ";
    // dateStr += date.getFullYear();
    return dateStr;
  }

  getDateDiffDay(dateTime) {
    let date = new Date(dateTime);
    let now = new Date();

    var delta = Math.abs(date.getTime() - now.getTime()) / 1000;
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    return days;
  }

  getDateDiffHour(dateTime) {
    let date = new Date(dateTime);
    let now = new Date();

    var delta = Math.abs(date.getTime() - now.getTime()) / 1000;
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    return hours;
  }

  getDateDiffMinute(dateTime) {
    let date = new Date(dateTime);
    let now = new Date();

    var delta = Math.abs(date.getTime() - now.getTime()) / 1000;
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    return minutes;
  }

  getEvents() {
    this.spinner.show();
    let url = "events";
    if (this.eventType) {
      url += "?etype=" + this.eventType;
    }

    this.httpService.search(url).subscribe((e) => {
      this.events = e.results;
      this.spinner.hide();
    },
      (error: any) => {
        console.log(error);
        this.spinner.hide();
      });
  }

}
