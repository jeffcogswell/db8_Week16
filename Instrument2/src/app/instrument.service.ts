import { Injectable } from '@angular/core';
import { Instrument } from './instrument';

@Injectable({
	providedIn: 'root'
})
export class InstrumentService {

	TheList: Instrument[] = [
		{ type: 'piano', color: 'black', year: 1998 },
		{ type: 'soprano sax', color: 'gold', year:1955 }
	];
	constructor() { }

	get(): Instrument[] {
		return this.TheList;
	}
}
