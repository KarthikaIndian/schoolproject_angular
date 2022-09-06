import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{TeacherService}from '../../service/teacher.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-teachercreate',
  templateUrl: './teachercreate.component.html',
  styleUrls: ['./teachercreate.component.css']
})
export class TeachercreateComponent implements OnInit {

  constructor(private service:TeacherService,private rout:Router) {

   }
   language:Array<any>=[
    {name:"Tamil",value:"Tamil"},
    {name:"English",value:"English"},
    {name:"Hindhi",value:"Hindhi"}
   ]
   editdata:any
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
   language:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),
    country:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    pincode:new FormControl('',Validators.required),
    joningdate:new FormControl('',Validators.required),
  })
  ngOnInit(): void {
  }
  messageclass="";
  message="";
  saveteacher(){
if(this.register.valid){
  
   this.service.saveteacher(this.register.value).subscribe(res=>{
if(res!=null){
  alert("Teacher contact data save successfully")
this.messageclass="success";
this.rout.navigateByUrl('/teacher/teacherlist')
this.clearteacher();

}
   })
}else{
this.message="Please enter valid data"
// alert("please enter valid data")
this.messageclass="error"
}
  }
  clearteacher(){
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
      language:new FormControl(""),
      state:new FormControl(""),
      country:new FormControl(""),
      address:new FormControl(""),
      pincode:new FormControl(""),
      joningdate:new FormControl(""),
 
    })

  }
  update(id:any){
    this.service.loadteacherbycode(id).subscribe(data=>{
      this.editdata=data;
    })
    this. register=new FormGroup({
    
      id:new FormControl(),
      name:new FormControl(this.editdata.name),
      lastname:new FormControl(this.editdata.lastname),
      email:new FormControl(this.editdata.email),
      phonenumber:new FormControl(this.editdata.phonenumber),
      bloodgroup:new FormControl(this.editdata.bloodgroup),
      age:new FormControl(this.editdata.age),
      experiance:new FormControl(this.editdata.experiance),
      qualification:new FormControl(this.editdata.qualification),
      gender:new FormControl(this.editdata.gender),
      language:new FormControl(this.editdata.language),
      state:new FormControl(this.editdata.state),
      country:new FormControl(this.editdata.country),
      address:new FormControl(this.editdata.address),
      pincode:new FormControl(this.editdata.pincode),
      joningdate:new FormControl(this.editdata.joiningdate),
    })
  }
  get name(){
    return this.register.get("name")
  }
}
