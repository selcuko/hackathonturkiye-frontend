import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
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
  @ViewChild('blog') el_blog: ElementRef;
  @ViewChild('find') el_find: ElementRef;
  @ViewChild('blog_selector') el_blog_selector: ElementRef;
  @ViewChild('find_selector') el_find_selector: ElementRef;

  slug: string = '';
  srctype: string = '';
  crossesPost: any;
  searchresults: any;
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
        this.srctype = url['type'] || '';
      });
  }

  ngOnInit(): void {
   this.getResults();
  }

  openBlog() {
    this.el_blog.nativeElement.classList.add('in');
    this.el_blog.nativeElement.classList.add('active');
    this.el_blog_selector.nativeElement.classList.add('active');
    this.el_find.nativeElement.classList.remove('in');
    this.el_find.nativeElement.classList.remove('active');
    this.el_find_selector.nativeElement.classList.remove('active');
  }

  openFind() {
    this.el_blog_selector.nativeElement.classList.remove('active');
    this.el_blog.nativeElement.classList.remove('in');
    this.el_blog.nativeElement.classList.remove('active');
    this.el_find.nativeElement.classList.add('in');
    this.el_find.nativeElement.classList.add('active');
    this.el_find_selector.nativeElement.classList.add('active');
  }

  getResults() {
    this.spinner.show();
    let url: string;
    this.srctype === 'search' ? url = 'tagsearch/?inexact=' + this.slug : url = 'tagsearch/' + this.slug;
    this.httpService.search(url).subscribe((response) => {
      if(this.srctype === 'search') {
       this.searchresults = response.results;
      }
      else {
        this.crossesPost = response.in_posts;
        this.crossesEvents = response.in_events;
      }
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
