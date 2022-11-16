import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './api-response';
import { Employee } from './employee';

@Injectable({
	providedIn: 'root'
})
export class EmployeeService {

	// Freely admit that I'm copying and pasting
	// from the Department version, which you all are
	// free to do from this example in the future.
	// Copy the five CRUD functions and the constructor.
	// And search-and-replace Department with Employee
	// Employee IDs are numbers. So have to change those too
	// from string to number.
	// And finally probably change variable names "dep" to "emp".

	getAll(cb: any) {
		// https://localhost:7147/Employee
		this.http.get<Employee[]>('https://localhost:7147/employee').subscribe(cb);
	}

	getOne(cb: any, id: number) {
		// Typo! Take out the [].
		this.http.get<Employee>(`https://localhost:7147/employee/${id}`).subscribe(cb);
	}

	add(cb: any, emp: Employee) {
		this.http.post<Employee>('https://localhost:7147/employee', emp).subscribe(cb);
	}

	delete(cb: any, id: number) {
		this.http.delete<ApiResponse>(`https://localhost:7147/employee/${id}`).subscribe(cb);
	}

	update(cb: any, emp: Employee) {
		this.http.put<ApiResponse>('https://localhost:7147/employee', emp).subscribe(cb);
	}

	constructor(private http: HttpClient) { }
}
