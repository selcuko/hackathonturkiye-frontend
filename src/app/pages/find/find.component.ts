import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(d => {
      this.eventType = d['etype'] || "";
      this.eventTag = d['etag'] || "";
    });

    this.route.queryParams.subscribe(d => {
      this.tags = d['etiketler'].split(',') || [];
      this.status = d['durumu'] || "";
    });

  }

  ngOnInit(): void {
  }

}
