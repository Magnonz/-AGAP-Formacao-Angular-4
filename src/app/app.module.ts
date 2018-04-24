import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//   Import Bootstrap Alert
import { AlertModule } from 'ngx-bootstrap';

//    Import Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {environment} from '../environments/environment';

import { AppComponent } from './app.component';


import { LeftBarComponent } from './shared/leftbar/leftbar.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AuthService } from './shared/auth.service';
import { MenuService } from './shared/menu.service';

import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { DataService } from './shared/data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PageComponent } from './pages/new/page.component';

@NgModule({
  //Componentes
  declarations: [
    AppComponent,
    LeftBarComponent,
    TopbarComponent,
    FooterComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    PageComponent

  ],
  imports: [
    BrowserModule,   
    FormsModule,
    AlertModule.forRoot(), 
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule
  ],

  //Serviços
  providers: [
    AuthService,
    MenuService,
    DataService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
