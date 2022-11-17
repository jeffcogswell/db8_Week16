import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drink } from './drink';

@Injectable({
	providedIn: 'root'
})
export class DrinkService {

	getAll(cb: any) {
		// https://localhost:7147/Drink
		this.http.get<Drink[]>('https://localhost:7176/Drink').subscribe(cb);
	}

	getOne(cb: any, id: number) {
		// Typo! Take out the [].
		this.http.get<Drink>(`https://localhost:7176/Drink/${id}`).subscribe(cb);
	}

	add(cb: any, emp: Drink) {
		this.http.post<Drink>('https://localhost:7176/Drink', emp).subscribe(cb);
	}

	delete(cb: any, id: number) {
		this.http.delete(`https://localhost:7176/Drink/${id}`).subscribe(cb);
	}

	update(cb: any, emp: Drink) {
		this.http.put('https://localhost:7176/Drink', emp).subscribe(cb);
	}

	constructor(private http: HttpClient) { }
}
