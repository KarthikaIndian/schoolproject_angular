import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
apiurl="https://62ff38cb34344b6431f4c29e.mockapi.io/student"
  constructor ( private http:HttpClient ) { }
getstudent(){
    return this.http.get(this.apiurl)
  }
  savestudent(studentdata:any){
    return this.http.post(this.apiurl,studentdata)
  }
  loadstudentbycode(id:any){

    return this.http.get(this.apiurl+'/'+id)

  }
  removedelete(id:any){

    return this.http.delete(this.apiurl+'/'+id)

  }
  updatestudent(id:any,studentdata:any){
    return this.http.put(this.apiurl+'/'+id,studentdata)
 

  }
}
