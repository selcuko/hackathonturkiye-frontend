import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../services/http/http.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  postData = {
    title: 'testt',
    category: {
      name: ''
    },
    body: '',
    email: '',
    contact: '',
    phone: '',
  };

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.http.contact("contact",this.postData).subscribe((reps) => {
      console.log(reps);
    },
      (error: any) => {
        console.log(error);
  });
  }

}
