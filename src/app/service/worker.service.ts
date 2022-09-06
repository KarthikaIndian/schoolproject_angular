import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WorkerService {
apiurl="https://62ff38cb34344b6431f4c29e.mockapi.io/worker"
  constructor(private http:HttpClient) { }
  loadworker(){
    return this.http.get(this.apiurl)
  }
  saveworker(data:any){

    return this.http.post(this.apiurl,data)

  }
  loadworkerbycode(id:any){

    return this.http.get(this.apiurl+'/id')

  }
  removeworker(id:any){

    return this.http.delete(this.apiurl+'/'+id)

  }
}
