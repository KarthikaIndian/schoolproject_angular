import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { WorkerService } from 'src/app/service/worker.service';

@Component({
  selector: 'app-workercreate',
  templateUrl: './workercreate.component.html',
  styleUrls: ['./workercreate.component.css']
})
export class WorkercreateComponent implements OnInit {

  constructor(private service:WorkerService,private route:Router) { }
  register=new FormGroup({
    id:new FormControl(),
    name:new FormControl('',Validators.required),
    lastname:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    phonenumber:new FormControl('',Validators.required),
    bloodgroup:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),
    experiance:new FormControl('',Validators.required),
    qualification:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    jobposition:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),
    country:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    pincode:new FormControl('',Validators.required),
    joningdate:new FormControl('',Validators.required),
  })
  saveworker(){
    this.service.saveworker(this.register.value).subscribe(res=>{
      alert("Teacher contact data save successfully")
      this.route.navigateByUrl('/worker/workerlist')
      this.clearworker()

    })
  }
  clearworker(){
    this. register=new FormGroup({
      id:new FormControl(),
      name:new FormControl(""),
      lastname:new FormControl(""),
      email:new FormControl(""),
      phonenumber:new FormControl(""),
      bloodgroup:new FormControl(""),
      age:new FormControl(""),
      experiance:new FormControl(""),
      qualification:new FormControl(""),
      gender:new FormControl(""),
      jobposition:new FormControl(""),
      state:new FormControl(""),
      country:new FormControl(""),
      address:new FormControl(""),
      pincode:new FormControl(""),
      joningdate:new FormControl(""),
 
    })

  }
  ngOnInit(): void {
  }

}
