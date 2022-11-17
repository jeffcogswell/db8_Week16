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
		this.DrnSrv.delete(

			// First parameter: The callback function
			() => {
				this.refresh()
			},


			// Second parameter: the ID we are deleting
			id
			
		);
	}

	updateOne(drink: Drink) {
		this.DrnSrv.update(

			// First parameter: The callback functino
			() => {
				this.refresh();
			},

			// Second parameter: the full object we're updating
			drink
		)
	}

}
