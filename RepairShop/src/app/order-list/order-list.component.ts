import { Component, OnInit } from '@angular/core';
import { RepairOrder } from '../repair-order';
import { RepairOrderService } from '../repair-order.service';
import { ShortRepairList } from '../short-repair-list';

@Component({
	selector: 'app-order-list',
	templateUrl: './order-list.component.html',
	styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

	repairlist: ShortRepairList[] = [];

	editOrder: RepairOrder = {
		id: 0, customer: '', instrument_id: 0,
		status: 0, price: 0, notes: '', bookmark: false
	};

	searchName: string = '';
	bookmarkCheck: boolean = false;

	constructor(private OrderSrv: RepairOrderService) {
		this.refresh();
	}

	ngOnInit(): void {
	}

	refresh() {
		this.OrderSrv.shortList(

			(result: ShortRepairList[]) => {
				this.repairlist = result;
			}

		)
	}

	save(order: RepairOrder) {
		this.OrderSrv.add(

			(result: RepairOrder) => {
				this.refresh();
			},

			order

		);
	}

	openOrder(id: number) {
		this.OrderSrv.getOne(

			(result: RepairOrder) => {
				this.editOrder = result;
			},
			
			id
		)
	}

	update(order: RepairOrder) {
		this.OrderSrv.update(

			() => {
				this.refresh();
			},

			order

		)
	}

	search() {
		this.OrderSrv.searchByName(

			(result: ShortRepairList[]) => {
				this.repairlist = result;
			},

			this.searchName

		)
	}

	changeBookmarks() {
		console.log('CHECKBOX CHANGED!');
		console.log(this.bookmarkCheck);

		this.searchName = '';

		if (!this.bookmarkCheck) {
			this.refresh();
		}
		else {
			this.OrderSrv.bookmarks(

				(result: ShortRepairList[]) => {
					this.repairlist = result;
				}
			)
		}
	}

	clear() {
		this.searchName = '';
		this.refresh();
	}

}
