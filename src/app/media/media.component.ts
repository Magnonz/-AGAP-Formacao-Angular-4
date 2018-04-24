import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'media-page',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnChanges, OnInit, OnDestroy, AfterViewInit {
  
  public isLoggedIn: boolean = false;

  title = 'Media';
  
  ngAfterViewInit(): void {
    
  }
  ngOnDestroy(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  ngOnInit(): void{}

constructor(private auth:AuthService){




}

  
}
