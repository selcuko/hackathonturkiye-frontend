import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { NgxSpinnerService } from "ngx-spinner";
import { SeoService } from 'src/app/services/seo/seo.service';

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
  next: string;
  months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private router: Router,
    private seoService: SeoService,
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

    let title = this.status;
    if (this.eventLoc != "heryer") {
      title += ' ' + this.eventLoc;
    }
    if (this.eventType != "hepsi") {
      title += ' ' + this.eventType;
    } else {
      title +=  ' ' + "Hackathonlar";
    }

    this.seoService.updateTitle(title);
    this.seoService.addMeta('description', 'Hackathon Türkiye etkinlik arama sayfasında kendinize uygun hackathon, ideathon, makeathon, datathon, game jam ve benzeri etkinlikleri bulabilirsiniz. ' + title);
  }

  ngOnInit(): void {
    this.getEvents();
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

  isItFinished(date: any) {
    let end_date = new Date(date);
    let now = new Date();

    var Difference_In_Time = end_date.getTime() - now.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    if (Difference_In_Days > 0) {
      return true;
    }
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

  loadMore() {
    this.spinner.show();

    this.httpService.search(this.next, true).subscribe((e) => {
      this.next = e.next;
      this.events.push(...e.results);
      this.spinner.hide();
    },
      (error: any) => {
        console.log(error);
        this.spinner.hide();
      });
  }

  getEvents() {
    this.spinner.show();
    let status = this.getStatus();
    let order_by = "order_by=-starts_at";
    if (status === "future") {
      order_by = "order_by=starts_at";
    }

    let url = "events?" + order_by + "&status=" + status;

    if (this.eventType && this.eventType !== "hepsi") {
      url += "&etype=" + this.eventType;
    }
    if (this.eventLoc && this.eventLoc !== "heryer") {
      url += "&location=" + this.eventLoc;
    }

    url += "&limit=16";

    this.httpService.search(url).subscribe((e) => {
      this.next = e.next;
      this.events = e.results;
      this.spinner.hide();
    },
      (error: any) => {
        console.log(error);
        this.spinner.hide();
      });
  }

}
