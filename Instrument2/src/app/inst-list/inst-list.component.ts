import { Component, OnInit } from '@angular/core';
import { Instrument } from '../instrument';
import { InstrumentService } from '../instrument.service';

@Component({
	selector: 'app-inst-list',
	templateUrl: './inst-list.component.html',
	styleUrls: ['./inst-list.component.css']
})
export class InstListComponent implements OnInit {

	TheList: Instrument[];

	// I'm removing public/private. The service instance
	// still gets injected. However, it doesn't become
	// a member variable.
	constructor(InstSrv: InstrumentService) {
		this.TheList = InstSrv.get();
	}

	ngOnInit(): void {
	}

}
