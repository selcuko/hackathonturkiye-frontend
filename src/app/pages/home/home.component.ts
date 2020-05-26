import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo/seo.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    private spinner: NgxSpinnerService,
    private seoService: SeoService
  ) { }

  

  ngOnInit(): void {
    //this.spinner.show();
    // this.seoService.updateTitle('Anasayfa');
    // this.seoService.updateMeta('description', 'Anasayfa açıklamasıdır.');


  }

}
