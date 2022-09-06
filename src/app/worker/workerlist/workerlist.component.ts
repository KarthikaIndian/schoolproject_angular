import { Component, OnInit } from '@angular/core';
import{WorkerService}from '../../service/worker.service'
import{ActivatedRoute}from '@angular/router'
@Component({
  selector: 'app-workerlist',
  templateUrl: './workerlist.component.html',
  styleUrls: ['./workerlist.component.css']
})
export class WorkerlistComponent implements OnInit {

  constructor(private service:WorkerService) {
    this.loadworker()
   }
  
  ngOnInit(): void {
  }
  workerdata:any
  loadworker(){
    this.service.loadworker().subscribe(data=>{
      this.workerdata=data
    })
    }
    delete(id:any){
      if(confirm("Do you want to remove")){
        this.service.removeworker(id).subscribe(data=>{
       this.loadworker();
        })
      }
    }

}
