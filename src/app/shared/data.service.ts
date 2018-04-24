import { Injectable } from "@angular/core";


import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()

export class DataService{

    constructor(public http: HttpClient){

    }
     

    //--------- Vai buscar o pedido http em get()
    getHackerNews(): Observable<any>{
        

        return this.http.get('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty')
       // .map(x => JSON.parse(JSON.stringify(x)));
    }


}