import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/services/test/test.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  eventType: string = "";
  eventTag: string;
  tags: [];
  status: string;
  events: Array<any>;

  constructor(private route: ActivatedRoute, private httpService: TestService) {

    this.route.params.subscribe(d => {
      this.eventType = d['etype'] || "";
      this.eventTag = d['etag'] || "";
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
    //this.spinner.show();
    // this.seoService.updateTitle('Anasayfa');
    // this.seoService.updateMeta('description', 'Anasayfa açıklamasıdır.');
  }

  getEvents() {

    let url = "events";
    if (this.eventType) {
      url += "?etype=" + this.eventType;
    }

    this.httpService.search(url).subscribe((e) => {
      this.events = e.results;
    },
      (error: any) => {
        console.log(error);
      });
  }

}
