import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FooterComponent } from './footer/footer.component';
import { LeftBarComponent } from './leftbar/leftbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AppComponent } from '../app.component';
import { AuthService } from './auth.service';
import { MenuService } from './menu.service';
import { DataService } from './data.service';
import { AuthGuard } from '../auth-guard.service';



@NgModule({
  declarations: [
    TopbarComponent,
    LeftBarComponent,
    FooterComponent,
   
   
    
  ],
  exports: [
    TopbarComponent,
    LeftBarComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    
   
  ],
  providers: [ AuthService, MenuService, DataService, AuthGuard ],

})
export class SharedModule { }