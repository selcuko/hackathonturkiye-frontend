import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

interface MailChimpResponse {
	result: string;
	msg: string;
}

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent {

	submitted: boolean = false;
	submail: string = '';
	mailChimpEndpoint: string = 'https://hackathonturkiye.us18.list-manage.com/subscribe/post-json?u=e73471f6b46f14749c393649c&amp;id=744a9e6606';
	error: string = '';

	constructor(private http: HttpClient) { }

	submit() {

		const params = new HttpParams()
			.set('EMAIL', this.submail)
			.set('b_e73471f6b46f14749c393649c_744a9e6606', ''); // hidden input name

		const mailChimpUrl = this.mailChimpEndpoint + params.toString();

		// 'c' refers to the jsonp callback param key. This is specific to Mailchimp
		this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(response => {
			if (response.result && response.result !== 'error') {
				this.submitted = true;
			}
			else {
				this.error = response.msg;
			}
		}, error => {
			console.error(error);
			this.error = 'Sorry, an error occurred.';
		});


	}

}
