import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
//import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // add map function to observable

@Injectable()
export class ClientService {

	constructor(private http: Http) { 
	}

	getClients() {
		return this.http.get('../assets/clients.json')
		.map((res: Response) => res.json());
	}
}
