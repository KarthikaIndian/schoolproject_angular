import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements DoCheck {
  isvisible=true
  constructor( private rote:Router) { }
 

  ngDoCheck(): void {
    const currentrout=this.rote.url

    if(currentrout=="/login"|| currentrout=="/signup"  ){
      this.isvisible=false
    }else{
      this.isvisible=true
    }
  }

  ngOnInit(): void {
  }

}
