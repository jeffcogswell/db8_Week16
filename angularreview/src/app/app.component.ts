import { Component } from '@angular/core';
import { Instrument } from './instrument';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	testInst: Instrument = {
		type: 'Piano',
		color: 'Black',
		year: 1998		
	}

	title = 'angularreview';
}
