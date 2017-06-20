import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map'; // add map function to observable

export interface Client {
	dn: string;
	ipHostNumber: string;
	macAdress: string | Array<string>;
	cn: string;
}

export interface DataStore {
	clients: Client[];
}

@Injectable()
export class ClientService {
	private baseUrl: string;
	public dataStore : DataStore;
	public clients: Observable<Client[]>;
	private _clients: BehaviorSubject<Client[]>;
	
	constructor(private http: Http) { 
		this.baseUrl = '../assets/clients.json'; 
		this.dataStore = {
			clients: []
		};
		this._clients = <BehaviorSubject<Client[]>>new BehaviorSubject([]);
		this.clients = this._clients.asObservable();
	}
	
	/**
	 * Async loading of all clients and fill dataStore. 
	 * The rootPage subscribes to async loading with *ngFor, so no reloading (nav.setRoot in app.component) is required. 
	 */ 
	loadAll() {
		this.http.get(`${this.baseUrl}`).map((res: Response) => res.json()).subscribe(data => {
			this.dataStore.clients = data;
			this._clients.next(Object.assign({}, this.dataStore).clients);
		}, error => console.log('Could not load clients.'));
	}
}
