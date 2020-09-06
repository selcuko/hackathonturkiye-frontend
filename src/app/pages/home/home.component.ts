import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpService } from 'src/app/services/http/http.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postData = {
    category: {
      name: ''
    },
    body: '',
    email: '',
    contact: '',
    phone: ''

  };
  events: Array<any>;
  searchQuery: string = '';

  constructor(
    private httpService: HttpService,
    private alertService: AlertService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTopPosts();
  }

  getTopPosts() {
      this.spinner.show();
      this.httpService.search('events/?order_by=starts_at&status=future').subscribe((e) => {
        this.events = e.results;
        this.spinner.hide();
      },
        (error: any) => {
          console.log(error);
          this.spinner.hide();
        });

  }

  validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.postData.email)) {
      return true;
    }
    return false;
  }

  validatePhone() {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (this.postData.phone.match(phoneno)) {
      return true;
    }
    else {
      return false;
    }
  }

  submitMessage() {
    if (this.postData.body && this.postData.category.name && this.postData.email && this.postData.contact) {
      if (this.postData.phone && !this.validatePhone()) {
        this.alertService.warning(
          'Lütfen doğru bir telefon numarası giriniz'
        );
        return false;
      }
      if (!this.validateEmail()) {
        this.alertService.warning(
          'Lütfen doğru bir email adresi giriniz'
        );
        return false;
      }

      this.httpService.contact('contact/', this.postData).subscribe(() => {
        this.alertService.success(
          'Mesajınız başarılı bir şekilde iletilmiştir'
        );
      },
        (error: any) => {
          this.alertService.warning(error);
        });
    }

    else {
      this.alertService.warning('Lütfen yıldızlı alanları doldurunuz');
    }

  }

  search() {
    if(this.searchQuery === '' || this.searchQuery.length < 3) {
      this.alertService.danger('Lütfen arama yapabilmek için en az 3 harf giriniz');
    }
    else {
      this.router.navigate(['/etiket/' + this.searchQuery + '/search']);
    }
  }

  hide(hideID) 
  {
    hideID.myDivElementRef.nativeElement.style = 'display: none';
  }

}
