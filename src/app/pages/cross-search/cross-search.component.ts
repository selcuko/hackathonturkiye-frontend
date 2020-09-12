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
  events: any;
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

  getUrl(event) {
    if (event.type === "blogpost") {
      return "/blog/" + event.slug;
    } else {
      return "/etkinlik/" + event.slug;
    }
  }

  getDescription(description) {
    if (description.length < 100) {
      return description;
    }

    return description.substring(0, 97) + '...';
  }

  getBlogDef(event) {

    if (event.type === "blogpost") {
      return "[Blog] ";
    } else if (event.type === "ideathon") {
      return "[Ideathon] ";
    } else if (event.type === "hackathon") {
      return "[Hackathon] ";
    } else if (event.type === "gamejam") {
      return "[Game Jam] ";
    } else if (event.type === "makeathon") {
      return "[Makeathon] ";
    } else if (event.type === "datathon") {
      return "[Datathon] ";
    } else if (event.type === "siber") {
      return "[Siber Güvenlik] ";
    } else if (event.type === "educathon") {
      return "[Educathon] ";
    } else if (event.type === "webinar") {
      return "[Webinar] ";
    } else if (event.type === "workshop") {
      return "[Workshop] ";
    }
  }

  getResults() {
    this.spinner.show();
    let url: string;
    this.srctype === 'search' ? url = 'tagsearch/?inexact=' + this.slug : url = 'tagsearch/' + this.slug;
    this.httpService.search(url).subscribe((response) => {

      if (this.srctype === 'search') {

        if (response.results.length > 0) {
          this.events = response.results[0].in_posts.map(function (post) {
            return {
              title: post.title,
              slug: post.slug,
              thumbnail: post.thumbnail,
              tags: post.tags,
              type: "blogpost",
              description: post.summary
            }
          });
          this.events = this.events.concat(response.results[0].in_events.map(function (event) {
            return {
              title: event.name,
              slug: event.slug, //change to slug
              thumbnail: event.thumbnail,
              tags: event.tags,
              type: event.etype.name,
              description: event.description
            }
          }));
        }
      }
      else {
        this.events = response.in_posts.map(function (post) {
          return {
            title: post.title,
            slug: post.slug,
            thumbnail: post.thumbnail,
            tags: post.tags,
            type: "blogpost",
            description: post.summary
          }
        });
        this.events = this.events.concat(response.in_events.map(function (event) {
          return {
            title: event.name,
            slug: event.slug,
            thumbnail: event.thumbnail,
            tags: event.tags,
            type: event.etype.name,
            description: event.description
          }
        }));
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
