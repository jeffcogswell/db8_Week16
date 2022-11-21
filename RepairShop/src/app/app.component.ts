import { Component } from '@angular/core';
import { Instrument } from './instrument';
import { InstrumentService } from './instrument.service';
import { RepairOrder } from './repair-order';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	newOrder: RepairOrder = {
		id: 0, customer: '', instrument_id: 0,
		status: 0, price: 0, notes: '', bookmark: false
	};
	title = 'RepairShop';

	TheInstruments: Instrument[] = [];

	constructor(private InstSrv: InstrumentService) {
		InstSrv.getAll(
			(result: Instrument[]) => {
				this.TheInstruments = result;
			}
		);
	}

	save() {
		
	}
}
