import { Component, OnInit } from '@angular/core';
import { Drink } from '../drink';
import { DrinkService } from '../drink.service';

@Component({
	selector: 'app-drink-list',
	templateUrl: './drink-list.component.html',
	styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent implements OnInit {

	TheList: Drink[] = [];

	constructor(private DrnSrv: DrinkService) { }

	ngOnInit(): void {
		this.refresh();
	}

	refresh() {
		this.DrnSrv.getAll(
			(result: Drink[]) => {
				this.TheList = result;
			}
		);
	}

	deleteOne(id: number) {

	}

	updateOne(drink: Drink) {

	}

}
