import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'new-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit{
  
  public showNew: boolean = false;
  public mediaList: Array<any> = [];

  constructor(private auth: AuthService,
    public af: AngularFirestore,
    private router: Router) {  }
  
  ngOnInit(): void { 
    this.auth.userState
      .subscribe(x => this.auth.isLoggedIn = x);

    this.af.collection("/Medias")
      .snapshotChanges()
      .subscribe(x => {
        let documentArray: Array<any> = [];
        x.forEach(element => {
          this.af.doc<any>('/Medias/' + element.payload.doc.id)
            .valueChanges()
            .subscribe(x => documentArray.push({id: element.payload.doc.id, doc: x }));
        });

        this.mediaList = documentArray;
      });

  }

  public hidePage(args: { type: string, text: string }) {
    if (args.type == "success") this.showNew = false;
  }
  public goToNew() {
    this.router.navigate(['/media', 'new']);
  }

}

