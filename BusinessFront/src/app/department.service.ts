import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DepartmentService {

	// Instead of holding an array with our data,
	// this class will call back to the web server
	// for each type of operation: Create, Read, Update, Delete.
	// We'll write a function that does each one:
	//      GetAll
	//      GetOne
	//      Add
	//      Delete
	//      Update

	constructor() { }
}
