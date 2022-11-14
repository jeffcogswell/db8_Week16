import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Instrument } from '../instrument';

@Component({
	selector: 'app-inst-detail',
	templateUrl: './inst-detail.component.html',
	styleUrls: ['./inst-detail.component.css']
})
export class InstDetailComponent implements OnInit {

	@Input() TheInst: Instrument = {
		type: '',
		color: '',
		year: 0
	}

	@Input() name: string = '';

	constructor() { }

	ngOnInit(): void {
	}

}
