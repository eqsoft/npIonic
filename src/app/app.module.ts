import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { NpAdminApp } from './app.component';
import { ClientsPage } from '../pages/clients/clients';

import { ClientService } from './shared/client.service';

@NgModule({
  declarations: [
    NpAdminApp,
    ClientsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(NpAdminApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    NpAdminApp,
    ClientsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClientService
  ]
})
export class AppModule {}
