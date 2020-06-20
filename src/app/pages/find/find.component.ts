import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  eventType: string = "hepsi";
  eventLoc: string = "heryer";
  tags: [];
  status: string;
  events: Array<any>;
  page: Int16Array;
  pageSize: Int16Array;
  total: Int16Array;
  months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private router: Router,
    private spinner: NgxSpinnerService) {

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.route.params.subscribe(d => {
      this.eventType = d['etype'] || "hepsi";
      this.eventLoc = d['eloc'] || "heryer";
    });

    this.route.queryParams.subscribe(d => {
      this.status = d['durumu'] || "";
    });

  }

  ngOnInit(): void {
    this.getEvents();
    // this.seoService.updateTitle('Anasayfa');
    // this.seoService.updateMeta('description', 'Anasayfa açıklamasıdır.');
  }



  navigate() {

    let url = '/etkinlikler/';
    let param = { replaceUrl: true };

    if (this.eventType && this.eventType !== 'hepsi') {
      url += this.eventType + '/';
    }

    if (this.eventLoc && this.eventLoc !== 'heryer') {

      if (this.eventType && this.eventType !== 'hepsi') {
        url += this.eventLoc + '/';
      }
      else {
        url += this.eventType + '/' + this.eventLoc + '/';
      }
    }

    if (this.status) {
      param["queryParams"] = { durumu: this.status };
    }

    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([url], param);
  }

  getDateTurkish(dateTime) {
    let date = new Date(dateTime);
    let dateStr = date.getDate() + " ";
    dateStr += this.months[date.getMonth()] + " ";
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

  getDescription(description) {
    if (description.length < 100) {
      return description;
    }

    return description.substring(0, 97) + '...';
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

  getStatus() {
    if (this.status == "devam-eden") {
      return "ongoing";
    }
    if (this.status == "yakinda") {
      return "future";
    }
    if (this.status == "gecmis") {
      return "finished";
    }

    return "future";
  }

  getEvents() {
    this.spinner.show();
    let url = "events?order_by=-starts_at&status=" + this.getStatus();

    if (this.eventType && this.eventType !== "hepsi") {
      url += "&etype=" + this.eventType;
    }
    if (this.eventLoc && this.eventLoc !== "heryer") {
      url += "&location=" + this.eventLoc;
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
