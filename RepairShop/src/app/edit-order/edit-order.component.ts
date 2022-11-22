import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Instrument } from '../instrument';
import { InstrumentService } from '../instrument.service';
import { RepairOrder } from '../repair-order';

@Component({
	selector: 'app-edit-order',
	templateUrl: './edit-order.component.html',
	styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

	@Input() editOrder: RepairOrder = {
		id: 0, customer: '', instrument_id: 0,
		status: 0, price: 0, notes: '', bookmark: false
	};

	TheInstruments: Instrument[] = [];

	@Output() save:EventEmitter<RepairOrder> = new EventEmitter<RepairOrder>();

	constructor(private InstSrv: InstrumentService) { 
		InstSrv.getAll(
			(result: Instrument[]) => {
				this.TheInstruments = result;
			}
		);
	}

	ngOnInit(): void {
	}

	saveIt() {
		this.save.emit(this.editOrder);
	}
}
