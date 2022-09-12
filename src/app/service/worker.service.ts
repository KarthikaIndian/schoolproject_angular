import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class WorkerService {
apiurl="https://62ff38cb34344b6431f4c29e.mockapi.io/worker"
  constructor(private http:HttpClient) { }
  loadworker(){
    return new Promise((resolve,reject)=>{
      this.http.get(this.apiurl).subscribe(
        (response)=>{
          resolve(response)
        },
        (err)=>{
          reject(err)
        }
      )
    }) 
  }
  saveworker(data:any){

    return new Promise ((resolve,reject)=>{
      this.http.post(this.apiurl,data).subscribe(
        (response)=>{
          resolve(response)
        },
        (err)=>{
          reject(err)
        }
      )
    })

  }
  loadworkerbycode(id:any){

    return new Promise((resolve,reject)=>{
      this.http.get(this.apiurl+'/'+id).subscribe(
        (response)=>{
          resolve(response)
        },
        (err)=>{
          reject(err)
        }
      )
    }) 

  }
  updateworkerapi(id:any,data:any){
    return new Promise((resolve,reject)=>{
      this.http.put(this.apiurl+'/'+id,data).subscribe(
        (response)=>{
          resolve(response)
        },
        (err)=>{
          reject(err)
        }
      )
    }) 

  }
  removeworker(id:any){


    return new Promise((resolve,reject)=>{
      this.http.delete(this.apiurl+'/'+id).subscribe(
        (response)=>{
          resolve(response)
        },
        (err)=>{
          reject(err)
        }
      )
    }) 

  }
}
