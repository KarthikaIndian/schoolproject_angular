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
   
   }
  
  ngOnInit(): void {
    this.loadworker()
  }
  workerdata:any=[]
   async loadworker() :Promise<any>{
    this.workerdata=await this.service.loadworker();
 
    }
   async delete(id:any):Promise<void>{
      if(confirm("Do you want to remove")){
       this.workerdata=await this.service.removeworker(id)
       this.loadworker();
      }
    }
    

}
