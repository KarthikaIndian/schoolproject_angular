import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private toast:ToastrService) { }

  ngOnInit(): void {

  }
  projet:any={
    code:"",


  }
  submit(){
    
  }

}
