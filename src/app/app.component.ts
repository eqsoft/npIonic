import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ClientsPage } from '../pages/clients/clients';
//import { ClientService } from './shared/client.service';

@Component({
	templateUrl: 'app.html'
})

export class NpAdminApp implements OnInit {
	rootPage:any = ClientsPage;
	public clients = Array<Object>();
	//@ViewChild('myNav') nav: NavController;
	
	constructor(platform: Platform) {
		platform.ready().then(() => {
			console.log("platform.ready()");
		});
	}
	
	ngOnInit() {
		console.log("ngOnInit()");
	}
}

