import { Component, OnInit, Input } from '@angular/core';
import { Instrument } from '../instrument';
import { InstrumentService } from '../instrument.service';

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
	};

	TheList: Instrument[];

	constructor(InstSrv: InstrumentService) {
		this.TheList = InstSrv.get();
	}

	ngOnInit(): void {
	}
	
	deleteMe() {
		for (let i = 0; i < this.TheList.length; i++) {
			if (this.TheList[i] == this.TheInst) {
				this.TheList.splice(i, 1);
			}
		}
	}

}
