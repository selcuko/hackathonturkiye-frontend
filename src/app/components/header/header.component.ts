import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';

  constructor(private router: Router, private alertService: AlertService) { }

  ngOnInit(): void {
    $(document).ready(() => {

      window.onscroll = function () { myFunction() };

      // Get the header
      var header = document.getElementById("myHeader");

      // Get the offset position of the navbar
      var sticky = header.offsetTop;

      // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
      function myFunction() {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
      
      /*----------------------------------------------------*/
      /*	Nav Menu & Search
      /*----------------------------------------------------*/

      $(".nav > li:has(ul)").addClass("drop");
      $(".nav > li.drop > ul").addClass("dropdown");
      $(".nav > li.drop > ul.dropdown ul").addClass("sup-dropdown");

    })
  }

  onClick() {
    if(this.searchQuery === '' || this.searchQuery.length < 3) {
      this.alertService.danger('Lütfen arama yapabilmek için en az 3 harf giriniz');
    }
    else {
      this.router.navigate(['/etiket/' + this.searchQuery]);
    }
  }

}
