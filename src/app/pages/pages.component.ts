import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FirebaseFirestore } from '@firebase/firestore-types';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'pages-page',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnChanges, OnInit, OnDestroy, AfterViewInit {
  


  public pageList : Array<any> = [];
  public isLoggedIn: boolean = false;

  title = 'Pages';
  
  ngAfterViewInit(): void {
 
  }
  ngOnDestroy(): void {
 
  }
  ngOnChanges(changes: SimpleChanges): void {
   
  }
  ngOnInit(): void{}


constructor(private auth:AuthService, private af : AngularFirestore){

this.af.collection("/Pages")
.valueChanges()
.subscribe(x=> this.pageList =x);


}

  
}
