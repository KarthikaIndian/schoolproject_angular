import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TeacherService {
apiurl="https://62ff38cb34344b6431f4c29e.mockapi.io/teacher"
  constructor( private http:HttpClient) { }
  loadteacher(){
    return this.http.get(this.apiurl)
  }
  saveteacher(data:any){

    return this.http.post(this.apiurl,data)

  }
  loadteacherbycode(id:any){

    return this.http.get(this.apiurl+'/id')

  }
  removeteacher(id:any){

    return this.http.delete(this.apiurl+'/'+id)

  }

}
