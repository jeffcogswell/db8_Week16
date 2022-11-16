import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee';

@Component({
	selector: 'app-employee-detail',
	templateUrl: './employee-detail.component.html',
	styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

	// Manually add Input, Output, EventEmitter to the import line

	@Input() employee: Employee = {
		id: 0, firstname: '', lastname: '', phone: '',
		email: '', department: '', hiredate: new Date()
	};

	@Output() delete:EventEmitter<number> = new EventEmitter<number>();

	constructor() { }

	ngOnInit(): void {
	}

	deleteMe() {
		this.delete.emit(this.employee.id);
	}
}
