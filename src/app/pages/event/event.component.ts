import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  slug: string = "";
  event: any;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {

    this.route.params.subscribe(d => {
      this.slug = d['slug'] || "";
    });
  }
  ngOnInit(): void {
    this.getEvent();
    //this.spinner.show();
    // this.seoService.updateTitle('Anasayfa');
    // this.seoService.updateMeta('description', 'Anasayfa açıklamasıdır.');
  }

  getEvent() {

    let url = "events/" + this.slug;

    this.httpService.search(url).subscribe((e) => {
      this.event = e;
    },
      (error: any) => {
        console.log(error);
      });
  }

}
