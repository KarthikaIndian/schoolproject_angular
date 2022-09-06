import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  constructor() { }
//   user:any={
//     name:"",
// fathername:"",
// email:"",
// phoneno:"",
//   }
//   student:any=[{
// name:"karthi",
// fathername:"koothaperumal",
// email:"kk@gmail.com",
// phoneno:"764387687",
// }]
  
  studentlist:any={}
  getdata(data:NgForm){


this.studentlist=data
  }
}
