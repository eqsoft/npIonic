import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ClientService, Client } from '../../app/shared/client.service';

@Component({
  selector: 'page-client-list',
  templateUrl: 'clientlist.html'
})
export class ClientListPage {
	public clients: Observable<Client[]>;
	public dataLoading: boolean = false;
	
	constructor( private navCtrl: NavController, clientService: ClientService ) {
		console.log("ClientsPage()");
		this.clients = clientService.clients;
		this.clients.subscribe( data => {
			this.dataLoading = (data.length == 0);
		}); 
	}
}
