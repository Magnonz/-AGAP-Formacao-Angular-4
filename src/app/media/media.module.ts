import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MediaComponent } from '../media/media.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';





@NgModule({

    declarations: [MediaComponent] ,
    imports:[AppRoutingModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule],

    exports: [MediaComponent]
})
export class MediaModule { }