import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MediaComponent } from '../media/media.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { NewMediaComponent } from './new/newmedia.component';





@NgModule({

    declarations: [MediaComponent,NewMediaComponent] ,
    imports:[AppRoutingModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule],

    exports: [MediaComponent, NewMediaComponent]
})
export class MediaModule { }



