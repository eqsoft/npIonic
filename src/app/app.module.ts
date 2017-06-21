import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { NpAdminApp } from './app.component';
import { ClientListPage } from '../pages/clientlist/clientlist';

import { ClientService } from './shared/client.service';

@NgModule({
  declarations: [
    NpAdminApp,
    ClientListPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(NpAdminApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    NpAdminApp,
    ClientListPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClientService,
    NpAdminApp
  ]
})
export class AppModule {}
