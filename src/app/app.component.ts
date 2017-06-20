import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { ClientListPage } from '../pages/clientlist/clientlist';
import { ClientService } from './shared/client.service';

@Component({
	templateUrl: 'app.html'
})
/**
 * Example for an async binding of a BehaviorSubject to a *ngFor template (see clientlist.html)
 * In this case there is no need of an async binding because there only the loading of the http.get promise is to be resolved.
 * 
*/
export class NpAdminApp implements OnInit {
	rootPage:any = ClientListPage;
	
	constructor(platform: Platform, clientService: ClientService) {
		platform.ready().then(() => {
			console.log("platform.ready()");
			clientService.loadAll();
			//this.nav.setRoot(this.nav.getActive().component); // not needed anymore
		})
	}
	
	ngOnInit() {
		console.log("ngOnInit()");
	}
}

