import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit, SimpleChanges } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { MenuService } from './shared/menu.service';
import { DataService } from './shared/data.service';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, OnDestroy, AfterViewInit {
  
  public isLoggedIn: boolean = false;

  title = 'app';
  
  public showPages: Boolean = true;
  public showMedia: Boolean = false;
  public showSettings: Boolean = false;
  public dataObj: any;

  constructor(private auth: AuthService,
              private nav: MenuService,
            private data: DataService) {  }

  ngOnInit(): void {

    this.auth.userState
      .subscribe(x => this.auth.isLoggedIn = x);

    //---- Seleção de conteudo nas paginas ------
    this.nav.page.subscribe(x => {

      this.showPages = false;
      this.showMedia = false;
      this.showSettings= false;
      switch (x) {
        case "/pages": this.showPages = true; break;
        case "/media": this.showMedia = true; break;
        case "/settings": this.showSettings = true; break;
        default: this.showPages = true; break;
      };

    })

    this.dataObj = this.data.getHackerNews();


  }
  
  ngAfterViewInit(): void {
  
  }
  ngOnDestroy(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
 




  
}
