import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  searchQuery: string = '';
  @ViewChild('menu') el: ElementRef;
  constructor(private router: Router, private alertService: AlertService) { }

  toggleMenu() {
    this.el.nativeElement.classList.toggle('collapse');
  }

  removeMenu() {
    this.el.nativeElement.classList.add('collapse');
  }

  search() {
    if(this.searchQuery === '' || this.searchQuery.length < 3) {
      this.alertService.danger('Lütfen arama yapabilmek için en az 3 harf giriniz');
    }
    else {
      this.router.navigate(['/etiket/' + this.searchQuery + '/search']);
    }
  }

}
