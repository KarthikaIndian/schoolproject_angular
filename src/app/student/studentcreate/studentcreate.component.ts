import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{StudentService}from '../../service/student.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-studentcreate',
  templateUrl: './studentcreate.component.html',
  styleUrls: ['./studentcreate.component.css']
})
export class StudentcreateComponent implements OnInit {

  constructor(private service:StudentService,private rout:Router) { }

  ngOnInit(): void {
  }
  register=new FormGroup({
    id:new FormControl(),
    studentname:new FormControl('',Validators.required),
    fathername:new FormControl('',Validators.required),
    phonenumber:new FormControl('',Validators.required),
    bloodgroup:new FormControl('',Validators.required),
    mothername:new FormControl('',Validators.required),
    standard:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    language:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),
    country:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    pincode:new FormControl('',Validators.required),
    eightboard:new FormControl('',Validators.required),
    eightpercentage:new FormControl('',Validators.required),
    eigthpassing:new FormControl('',Validators.required),
    tenthboard:new FormControl('',Validators.required),
    tenthpercentage:new FormControl('',Validators.required),
    tenthpassing:new FormControl('',Validators.required),
    

  })
  savestudent(){
// if(this.register.valid){
   this.service.savestudent(this.register.value).subscribe(result=>{
alert("successfully stored")
this.rout.navigateByUrl('/student/studentlist')
   })
//   }else{
// alert("please enter valid data")
//   }
// }

}
}