import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'new-media',
  templateUrl: './newmedia.component.html',
  styleUrls: ['./newmedia.component.css']
})
export class NewMediaComponent implements OnInit{
  
  @Output() InsertMediaDone: EventEmitter<{ type: string, text: string }>  = new EventEmitter();

  public msgArray: Array<{type: string, text: string}> = [];

  public media: { title: string,  img: string} 
    = { title: "",  img: "" };

  private tmedia;

  public id: string = "";

  constructor(private auth: AuthService,
    private af: AngularFirestore,
    private activatedRoute: ActivatedRoute) {  

      activatedRoute.params
        .subscribe(x => {
          this.id = x["id"];
          this.af.doc("/Medias/" + this.id)
            .valueChanges()
            .subscribe(fbDoc => {
              if (fbDoc) this.media = <any>fbDoc;
            });
        });
    }
  
  ngOnInit(): void { 
  

  }

  private imageSrc: string = '';

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
   
    var reader = new FileReader();
  
    reader.onload = this._handleReaderLoaded.bind(this);

    reader.readAsDataURL(file);
  }
  
  _handleReaderLoaded(e) {
    
    let reader = e.target;
    this.imageSrc = reader.result;
   this.media.img= this.imageSrc;
  }

  saveObject() {

    if (this.id != "new") {
      this.af.doc("/Medias/" + this.id)
      .update(this.media)
      .then(x => {
        this.InsertMediaDone.emit({ type: "success", text: "The page was created!" });
      })

    } else {
      this.af.collection("/Medias")
      .add(this.media)
      .then(x => {
        this.InsertMediaDone.emit({ type: "success", text: "The page was created!" });
        
      })
    }
    
  }

}