import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { environment } from '../environments/environment';

import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { PageComponent } from './pages/new/page.component';
import {NewMediaComponent} from './media/new/newmedia.component'
import { AuthGuard } from './auth-guard.service';


const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'pages' },
{ path: 'pages', component: PagesComponent },
{ path: 'pages/:id', component: PageComponent },
{ path: 'media', component: MediaComponent },
{ path: 'media/:id', component: NewMediaComponent },
{ path: 'settings', component: SettingsComponent },
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }