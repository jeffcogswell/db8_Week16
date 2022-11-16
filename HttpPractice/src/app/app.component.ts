import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { Component } from '@angular/core';
import { DeckOfCardsService } from './deck-of-cards.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'HttpPractice';

	// Here's the "correct" way to get an HttpClient
	// Let's ask Angular to supply the HttpClient instance
	constructor(private http: HttpClient, private docSrv: DeckOfCardsService) {}

	httpDemo() {
		let url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
		this.http.get(url).subscribe(
			(result: any) => {
				console.log(result);
			}
		);
	}

	// And this, finally, is how we will always do it in the future.
	// We will receive (through dependency injection) a service.
	// We'll call a function in the service, and pass in a callback function.
	// The service will do the API call, and call our callback
	// so we can receive the data.

	test2() {
		this.docSrv.getDeck(
			(result: any) => {
				console.log('Back in App Component');
				console.log(result);
			}
		);
	}

	/*
	httpDemo() {
		//alert('hi'); // Just a test to make sure the function is called

		// NOTE: Normally we do NOT create our own HttpClient instance.
		// Normally we receive it through dependency injection so that
		// Angular can make just one instance of it and we share it.
		// This is just so we can do a really quick demo of how to do
		// an http GET call.

		// Source: https://stackoverflow.com/questions/48372116/how-to-instantiate-an-angular-httpclient
		let url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
		let http = new HttpClient(new HttpXhrBackend({build: () => new XMLHttpRequest()}));

		http.get(url).subscribe(
			(result: any) => {
				console.log(result);
			}
		);
	}*/

}
