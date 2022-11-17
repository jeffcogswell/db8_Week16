import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Drink } from '../drink';

@Component({
	selector: 'app-drink-detail',
	templateUrl: './drink-detail.component.html',
	styleUrls: ['./drink-detail.component.css']
})
export class DrinkDetailComponent implements OnInit {

	@Input() drink: Drink = {
		id: 0, name: '', ingredients: '', alcohol: false
	};

	@Output() delete: EventEmitter<number> = new EventEmitter<number>();
	@Output() update: EventEmitter<Drink> = new EventEmitter<Drink>();

	editMode: boolean = false;
	editObj: Drink = {
		id: 0, name: '', ingredients: '', alcohol: false
	};

	constructor() { }

	ngOnInit(): void {
	}

	turnOnEdit() {
		this.editObj.name = this.drink.name;
		this.editObj.ingredients = this.drink.ingredients;
		this.editObj.alcohol = this.drink.alcohol;
		this.editMode = true;
	}

	deleteMe() {
		this.delete.emit(this.drink.id);
	}

	saveChanges() {
		this.editObj.id = this.drink.id;
		this.update.emit(this.editObj);
	}

	cancel() {
		this.editMode = false;
	}

}
