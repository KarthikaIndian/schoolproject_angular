import { Component, OnInit } from '@angular/core';
import{TeacherService}from '../../service/teacher.service'
import{ActivatedRoute}from '@angular/router'
import { TeachercreateComponent } from '../teachercreate/teachercreate.component';
import Swal from 'sweetalert2/dist/sweetalert2.js';
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
  }

teacherdata:any;
loadteacher(){
this.service.loadteacher().then(data=>{
  this.teacherdata=data
})
}
delete(id:any){
 
  this.service.removeteacher(id).then(data=>{
  
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
 this.loadteacher();

  })
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
