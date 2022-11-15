import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
	selector: 'app-department-list',
	templateUrl: './department-list.component.html',
	styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

	TheList: Department[] = [
		// This was just for testing... You can remove it.
		// { id: 'TEST', name: 'Test Department', location: 'Detroit' }
	];

	constructor(public DepSrv: DepartmentService) { }

	ngOnInit(): void {
		this.DepSrv.getAll(
			(result: Department[]) => {
				// Inside here is where we put our code for doing something
				// with the list we got back
				console.log('ALL DEPARTMENTS:')
				console.log(result);
				this.TheList = result;
			}
		);
	}

	doDeleteOne(id: string) {

		this.DepSrv.delete(
			// First parameter for delete: The callback function
			(result: string) => {
				console.log(result);
			},
			// Second parameter for delete: The id we want to delete
			id
		)

	}

}
