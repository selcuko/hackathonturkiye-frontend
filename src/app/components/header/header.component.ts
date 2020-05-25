import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {
        /*----------------------------------------------------*/
      /*	Nav Menu & Search
      /*----------------------------------------------------*/

      $(".nav > li:has(ul)").addClass("drop");
      $(".nav > li.drop > ul").addClass("dropdown");
      $(".nav > li.drop > ul.dropdown ul").addClass("sup-dropdown");

    })
  }

}
