import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ClientService, Client } from '../../app/shared/client.service';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'page-client-list',
  templateUrl: 'clientlist.html'
})
export class ClientListPage {
	public clients: Observable<Client[]>;
	public dataLoading: boolean = false;
	
	public searchTerm: string = '';
	public searchControl: FormControl;
	public items: any;
	public searching: any = false;
	
	private cs : ClientService;
	
	constructor( private navCtrl: NavController, clientService: ClientService ) {
		console.log("ClientsPage()");
		this.cs = clientService;
		this.clients = clientService.clients;
		this.clients.subscribe( data => {
			this.dataLoading = (data.length == 0);
		});
		 this.searchControl = new FormControl();
	}
	
	ionViewDidLoad() {
		this.setFilteredClients();
		this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
			this.searching = false;
			this.setFilteredClients();
		});
	}
	
	onSearchInput() {
		this.searching = true;
	}	
	
	setFilteredClients() {
			this.cs.filterClients(this.searchTerm);
	}
}
