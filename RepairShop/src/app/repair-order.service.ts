import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RepairOrder } from './repair-order';

@Injectable({
	providedIn: 'root'
})
export class RepairOrderService {

	add(cb: any, order: RepairOrder) {
		this.http.post<RepairOrder>('https://localhost:5001/repairorder', order).subscribe(cb);
	}

	constructor(private http: HttpClient) { }
}
