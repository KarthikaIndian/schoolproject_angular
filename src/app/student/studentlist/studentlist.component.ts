import { Component, OnInit } from '@angular/core';
import{StudentService}from '../../service/student.service'
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  constructor(private service:StudentService) { 
    this.loadstudent()
  }
student:any=[
  {
    id:1,
    name:"Aruli",
    fathername:"Sasi",
    dob:"12/07/2008",
    class:"X",
    phonenumber:9867537387,
    bloodgroup:"O+",
  },
  {
    id:2,
    name:"Dharunika",
    fathername:"Tamilmaran",
    dob:"12/12/2011",
    class:"VI",
    phonenumber:9878653407,
    bloodgroup:"A+",
  }
]
studentdata:any
loadstudent(){
this.service.loadstudent().subscribe(data=>{
  this.studentdata=data
})
}
delete(id:any){
  if(confirm("Do you want to remove")){
    this.service.removedelete(id).subscribe(data=>{
   this.loadstudent();
    })
  }
}

  ngOnInit(): void {
  }

}
