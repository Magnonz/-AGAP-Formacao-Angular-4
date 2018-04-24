import { Injectable } from "@angular/core";
import { HttpClient } from "selenium-webdriver/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class MenuService{

    private activePage = new BehaviorSubject<string>("pages");
    public page = this.activePage.asObservable();
    public setPage(pageLink: string){
        this.activePage.next(pageLink)
    }

    private menu : Array<{ text:string, link:string}>=[
            {text: 'Pages', link: "/pages"},
            {text: 'Media', link: "/media"},
            {text: 'Settings', link: "/settings"}
    ];

    public getMenuItems():Array<{ text:string, link:string}>{
         return this.menu;
    } 



}

