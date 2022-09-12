import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TeacherService {
apiurl="https://62ff38cb34344b6431f4c29e.mockapi.io/teacher"
  constructor( private http:HttpClient) { }
  loadteacher(){
    return new Promise((resolve,reject)=>{
      this.http.get(this.apiurl).subscribe(
        (response) => {
          resolve(response);
        },
        (err) => {
          reject(err);
        }
        )
      
    }) 
  }
  saveteacherservice(data:any){

    return new Promise((resolve,reject)=>{
      this.http.post(this.apiurl,data).subscribe(
    (response)=>{
      resolve(response);
    
    },
    (err)=>{
reject(err)
    }
      )
    }) 

  }


  updateteacherservice(id:any,data:any){

    return new Promise((resolve,reject)=>{
      this.http.put(this.apiurl+'/'+id,data).subscribe(
    (response)=>{
      resolve(response);
    
    },
    (err)=>{
reject(err)
    }
      )
    }) 

  }
  loadteacherbycode(id:any){
    return  new Promise((resolve,reject)=>{
      this.http.get(this.apiurl+'/'+id).subscribe(
        (response)=>{
          resolve(response);
        },
        (err)=>{
          err(reject)
        }
      )
    }) 

  }
  removeteacher(id:any){

    return new Promise ((resolve,reject)=>{
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
