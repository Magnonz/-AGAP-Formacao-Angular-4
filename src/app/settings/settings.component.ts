import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'settings-page',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnChanges, OnInit, OnDestroy, AfterViewInit {
  

  title = 'Settings';
  
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
