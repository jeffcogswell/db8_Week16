import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'BusinessFront';

	constructor(public http: HttpClient) { }

	finishedWithCall(obj: any) {
		console.log(obj);
	}

	callApi() {
		// Short version:
		// We need to give the HttpClient instance two things:
		//     1. A URL to call
		//     2. A function to call when the URL comes back, with the data.

		// LONG VERSION for self study:
		// If you want to dive in head first to understand this (but this is strictly optional): The get() method takes a single
		// parameter, a string for a URL, and it returns an object that has a method called subscribe. We the call that object's
		// subscribe method, passing in the function we want called after the URL call comes back.
		this.http.get<any>('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').subscribe(this.finishedWithCall);
	}
}
