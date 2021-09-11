import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpService } from 'src/app/services/http/http.service';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-halloffame',
  templateUrl: './halloffame.component.html',
  styleUrls: ['./halloffame.component.css']
})
export class HallOfFameComponent implements OnInit {

  list: any;
  next: string;

  constructor(
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private httpService: HttpService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void { }
}
