import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

	@Output() save:EventEmitter<RepairOrder> = new EventEmitter<RepairOrder>();

	constructor(private InstSrv: InstrumentService) { }

	ngOnInit(): void {
		this.InstSrv.getAll(
			(result: Instrument[]) => {
				this.TheInstruments = result;
			}
		);
	}

	saveIt() {
		this.save.emit(this.newOrder);
	}

}
