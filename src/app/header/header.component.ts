import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
  isvisiblile=true
  constructor(private router:Router) { }
  ngDoCheck(): void {
   const currentrouter=this.router.url
  if(currentrouter=="/login" || currentrouter=="/signup" ){
    this.isvisiblile=false
  }else{
    this.isvisiblile=true
  }
  }

 
}
