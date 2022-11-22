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

	constructor(private OrderSrv: RepairOrderService) {
		OrderSrv.shortList(

			(result: ShortRepairList[]) => {
				this.repairlist = result;
			}

		)
	}

	ngOnInit(): void {
	}

	save(order: RepairOrder) {
		this.OrderSrv.add(

			(result: RepairOrder) => {
				alert(result.id);
			},

			order

		);
	}

}
