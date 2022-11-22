import { Component, OnInit } from '@angular/core';
import { Instrument } from '../instrument';
import { InstrumentService } from '../instrument.service';
import { RepairOrder } from '../repair-order';

@Component({
	selector: 'app-add-order',
	templateUrl: './add-order.component.html',
	styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
	newOrder: RepairOrder = {
		id: 0, customer: '', instrument_id: 0,
		status: 0, price: 0, notes: '', bookmark: false
	};

	TheInstruments: Instrument[] = [];

	constructor(private InstSrv: InstrumentService) { 
		InstSrv.getAll(
			(result: Instrument[]) => {
				this.TheInstruments = result;
			}
		);
	}

	ngOnInit(): void {
	}

	save() {
		
	}

}
