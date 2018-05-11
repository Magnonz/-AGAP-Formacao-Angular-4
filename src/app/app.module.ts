import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRoutingModule } from "./app-routing.module";

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { LeftBarComponent } from './shared/leftbar/leftbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PagesComponent } from './pages/pages.component';
import { SettingsComponent } from './settings/settings.component';
import { PageComponent } from './pages/new/page.component';
import { AuthService } from './shared/auth.service';
import { MenuService } from './shared/menu.service';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './shared/data.service';
import { AuthGuard } from './auth-guard.service';
import { MediaModule } from './media/media.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PageComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    AppRoutingModule,
    MediaModule,
    SharedModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }