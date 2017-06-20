import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map'; // add map function to observable

export interface Client {
	dn: string;
	ipHostNumber: string;
	macAddress: string | Array<string>;
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
			this.dataStore.clients = this.sortClients(data,"cn");
			this._clients.next(Object.assign({}, this.dataStore).clients);
		}, error => console.log('Could not load clients.'));
	}
	
	filterClients(searchTerm) {
		console.log("filterClients: " + searchTerm);
		let col: string = "cn";
		let cl = this.dataStore.clients.filter((client) => { 
			
			if (client.cn.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
				col = "cn";
				return -1;
			}
			if (client.macAddress.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
				col = "macAddress";
				return -1;
			}
			if (client.ipHostNumber.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
				col = "ipHostNumber";
				return -1;
			}
		});
		console.log("found: " + cl.length);
		this._clients.next(this.sortClients(cl,col));
	}
	
	sortClients(data, col: string, asc?:boolean) {
		return data.sort((a,b) => { 
			if ( a[col] > b[col] ) {
				return 1;
			}
			if ( a[col] < b[col] )  {
				return -1;
			}
			return 0;
		});
	}
}
