import { Component, OnInit } from '@angular/core';
import{StudentService}from '../../service/student.service'
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  constructor(private service:StudentService) { 

  }

studentdata:any
loadstudent(){
this.service.getstudent().subscribe(data=>{
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
    this.loadstudent()
  }

}
