import { Injectable } from '@angular/core';
import { Instrument } from './instrument';

@Injectable({
	providedIn: 'root'
})
export class InstrumentService {

	TheList: Instrument[] = [];
	
	constructor() { }
}
