import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { NpAdminApp } from '../../app/app.component';
import { ClientService } from '../../app/shared/client.service';

@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html'
})
export class ClientsPage {
	public clients = Array<Object>();
	public loadClients :any;
	private resolve: Function;
	
	constructor(public navCtrl: NavController, private clientService: ClientService) {
		console.log("ClientsPage()");
		this.loadClients = new Promise((resolve, reject) => { this.resolve = resolve; });
		//this.clients = this.navParams.get('clients');
		//console.log(JSON.stringify(this.clients)); 
		this.loadData();
	}
	
	loadData() {
		console.log("loadData()");
		this.clientService
		.getClients()
		.subscribe((clients: Array<Object>) => { this.clients = clients; console.log(clients.length);  this.resolve(clients) } );
		//.subscribe((clients: Array<Object>) => { this.clients = clients; this.nav.push(ClientsPage) } );
		//.subscribe((clients: Array<Object>) => { this.nav.setRoot(this.nav.getActive().component) });
	}
}
