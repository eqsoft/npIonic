import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
//import { NpAdminApp } from '../../app/app.component';
import { ClientService, Client } from '../../app/shared/client.service';

@Component({
  selector: 'page-client-list',
  templateUrl: 'clientlist.html'
})
export class ClientListPage {
	public clients: Observable<Client[]>;
	//private _clients: BehaviorSubject<Client[]>; 
	constructor( private navCtrl: NavController, clientService: ClientService ) {
		console.log("ClientsPage()");
		this.clients = clientService.clients;
		this.clients.subscribe( data => console.log("loaded: " + data.length), error => console.log("error") ); 
		//this._clients = <BehaviorSubject<Client[]>>new BehaviorSubject([]);
	}
	
}
