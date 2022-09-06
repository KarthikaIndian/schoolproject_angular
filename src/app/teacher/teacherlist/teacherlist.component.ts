import { Component, OnInit } from '@angular/core';
import{TeacherService}from '../../service/teacher.service'
import{ActivatedRoute}from '@angular/router'
@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.css']
})
export class TeacherlistComponent implements OnInit {
teacherid:any;
  constructor(private service:TeacherService ,private route:ActivatedRoute) { 
    this.loadteacher()
    this.teacherid=this.route.snapshot.paramMap.get('id')
    console.log(this.teacherid)
    if(this.teacherid!=null){
      // this.update(this.teacherid)
    }
  }

teacherdata:any;
loadteacher(){
this.service.loadteacher().subscribe(data=>{
  this.teacherdata=data
})
}
delete(id:any){
  if(confirm("Do you want to remove")){
  this.service.removeteacher(id).subscribe(data=>{
 this.loadteacher();
  })
}
}
//   teacher:any=[
//     {
//     id:1,
//     name:"karthika",
//     phonenumber:9943626689,
//     email:"karthika.indian@gmail.com",
//     qulification:"MCA",
//     joindate:"02/06/2021"
//   },
//   {
//     id:2,
//     name:"Aravindhan",
//     phonenumber:9943784369,
//     email:"aravindh@gmail.com",
//     qulification:"B.Tech",
//     joindate:"08/08/2020"
//   },
//   {
//     id:3,
//     name:"Akaran ",
//     phonenumber:9973926747,
//     email:"akaran.indian@gmail.com",
//     qulification:"MBA",
//     joindate:"04/09/2019"
//   },
// ]  
  

  ngOnInit(): void {
    
  }


}
