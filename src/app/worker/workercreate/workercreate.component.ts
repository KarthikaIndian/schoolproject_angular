import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkerService } from 'src/app/service/worker.service';

@Component({
  selector: 'app-workercreate',
  templateUrl: './workercreate.component.html',
  styleUrls: ['./workercreate.component.css'],
})
export class WorkercreateComponent implements OnInit {
  editdata: any;
  workerid: any;
  constructor(
    private service: WorkerService,
    private route: Router,
    private rout: ActivatedRoute
  ) {
    this.workerid = this.rout.snapshot.paramMap.get('id');
    if (this.workerid != null) {
      this.updateworker(this.workerid);
    }
  }

  worker: any = [];
  register = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phonenumber: new FormControl('', Validators.required),
    bloodgroup: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    experiance: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    jobposition: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    pincode: new FormControl('', Validators.required),
    joningdate: new FormControl('', Validators.required),
  });
  async saveworker(): Promise<void> {
    
      if (this.register.value.id != null) {
        this.worker = await this.service.updateworkerapi(
          this.register.value.id,
          this.register.value
        );

        alert('Teacher contact data update successfully');
        this.route.navigateByUrl('/worker/workerlist');
      } else {
       
        this.worker = await this.service.saveworker(this.register.value);
        alert('Teacher contact data save successfully');
        this.route.navigateByUrl('/worker/workerlist');
        this.clearworker();
      }
    }

  
  clearworker() {
    this.register = new FormGroup({
      id: new FormControl(),
      name: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      phonenumber: new FormControl(''),
      bloodgroup: new FormControl(''),
      age: new FormControl(''),
      experiance: new FormControl(''),
      gender: new FormControl(''),
      jobposition: new FormControl(''),
      address: new FormControl(''),
      pincode: new FormControl(''),
      joningdate: new FormControl(''),
    });
  }
 async updateworker(id: any):Promise<void>{
  this.editdata=await  this.service.loadworkerbycode(id)
      
     
      this.register = new FormGroup({
        id: new FormControl(this.editdata.id),
        name: new FormControl(this.editdata.name),
        lastname: new FormControl(this.editdata.lastname),
        email: new FormControl(this.editdata.email),
        phonenumber: new FormControl(this.editdata.phonenumber),
        bloodgroup: new FormControl(this.editdata.bloodgroup),
        age: new FormControl(this.editdata.age),
        experiance: new FormControl(this.editdata.experiance),
        gender: new FormControl(this.editdata.gender),
        jobposition: new FormControl(this.editdata.jobposition),
        address: new FormControl(this.editdata.address),
        pincode: new FormControl(this.editdata.pincode),
        joningdate: new FormControl(this.editdata.joningdate),
      });
 
  }
  ngOnInit(): void {}
  get name() {
    return this.register.get('name');
  }
  get lastname(){
    return this.register.get('lastname')
  }
  get email(){
    return this.register.get('email')
  }
  get phonenumber(){
    return this.register.get('phonenumber')
  }
  get bloodgroup(){
    return this.register.get('bloodgroup')
  }
  get age(){
    return this.register.get('age')
  }
  get experiance(){
    return this.register.get('experiance')
  }
 
  get gender(){
    return this.register.get('gender')
  }
  get jobposition(){
    return this.register.get('jobposition')
  }
  get state(){
    return this.register.get('state')
  }
  get address(){
    return this.register.get('address')
  }
 
  get pincode(){
    return this.register.get('pincode')
  }
  get joningdate(){
    return this.register.get('joningdate')
  }

}
