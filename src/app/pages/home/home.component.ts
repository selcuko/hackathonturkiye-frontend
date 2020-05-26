import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo/seo.service';
import { NgxSpinnerService } from "ngx-spinner";
import { TestService } from '../../services/test/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

postdata:any;
  constructor(
    private spinner: NgxSpinnerService,
    private httpService: TestService,
    private seoService: SeoService
  ) { }

  

  ngOnInit(): void {
    //this.testApi();
    //this.spinner.show();
    // this.seoService.updateTitle('Anasayfa');
    // this.seoService.updateMeta('description', 'Anasayfa açıklamasıdır.');
  }

  testApi() {
    this.httpService.search("events/?limit=10&offset=10").subscribe((reps) => {
      console.log(reps);
    },
      (error: any) => {
        console.log(error);
  });
  }

}
