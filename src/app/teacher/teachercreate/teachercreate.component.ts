import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../../service/teacher.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-teachercreate',
  templateUrl: './teachercreate.component.html',
  styleUrls: ['./teachercreate.component.css'],
})
export class TeachercreateComponent implements OnInit {
  teacherid: any;
  editdata: any;
  constructor(
    private service: TeacherService,
    private rout: Router,
    private router: ActivatedRoute
  ) {
    this.teacherid = this.router.snapshot.paramMap.get('id');
    if (this.teacherid != null) {
      this.update(this.teacherid);
    }
  }

  register = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phonenumber: new FormControl('', Validators.required),
    bloodgroup: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    experiance: new FormControl('', Validators.required),
    qualification: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    language: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    pincode: new FormControl('', Validators.required),
    joningdate: new FormControl('', Validators.required),
  });
  ngOnInit(): void {}
  messageclass = '';
  message = '';
  saveteacher() {
    if (this.register.valid) {
      if (this.register.value.id != null) {
        this.service
          .updateteacherservice(this.register.value.id, this.register.value)
          .then((res) => {
            if (res != null) {
              Swal.fire({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire('Saved!', '', 'success');
                } else if (result.isDenied) {
                  Swal.fire('Changes are not saved', '', 'info');
                }
              });

              this.messageclass = 'success';
              this.rout.navigateByUrl('/teacher/teacherlist');
              this.clearteacher();
            }
          });
      } else {
        this.service.saveteacherservice(this.register.value).then((res) => {
          if (res != null) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
            this.messageclass = 'success';
            this.rout.navigateByUrl('/teacher/teacherlist');
            this.clearteacher();
          }
        });
      }
    } else {
      alert('All field is requied !');
      this.messageclass = 'error';
    }
  }
  clearteacher() {
    this.register = new FormGroup({
      id: new FormControl(),
      name: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      phonenumber: new FormControl(''),
      bloodgroup: new FormControl(''),
      age: new FormControl(''),
      experiance: new FormControl(''),
      qualification: new FormControl(''),
      gender: new FormControl(''),
      language: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
      address: new FormControl(''),
      pincode: new FormControl(''),
      joningdate: new FormControl(''),
    });
  }
  update(id: any) {
    this.service.loadteacherbycode(id).then((data) => {
      this.editdata = data;
      this.register = new FormGroup({
        id: new FormControl(this.editdata.id),
        name: new FormControl(this.editdata.name),
        lastname: new FormControl(this.editdata.lastname),
        email: new FormControl(this.editdata.email),
        phonenumber: new FormControl(this.editdata.phonenumber),
        bloodgroup: new FormControl(this.editdata.bloodgroup),
        age: new FormControl(this.editdata.age),
        experiance: new FormControl(this.editdata.experiance),
        qualification: new FormControl(this.editdata.qualification),
        gender: new FormControl(this.editdata.gender),
        language: new FormControl(this.editdata.language),
        state: new FormControl(this.editdata.state),
        country: new FormControl(this.editdata.country),
        address: new FormControl(this.editdata.address),
        pincode: new FormControl(this.editdata.pincode),
        joningdate: new FormControl(this.editdata.joningdate),
      });
    });
  }
  get name() {
    return this.register.get('name');
  }
  get lastname() {
    return this.register.get('lastname');
  }
  get email() {
    return this.register.get('email');
  }
  get phonenumber() {
    return this.register.get('phonenumber');
  }
  get bloodgroup() {
    return this.register.get('bloodgroup');
  }
  get age() {
    return this.register.get('age');
  }
  get experiance() {
    return this.register.get('experiance');
  }
  get qualification() {
    return this.register.get('qualification');
  }
  get gender() {
    return this.register.get('gender');
  }
  get language() {
    return this.register.get('language');
  }
  get state() {
    return this.register.get('state');
  }
  get address() {
    return this.register.get('address');
  }
  get country() {
    return this.register.get('country');
  }
  get pincode() {
    return this.register.get('pincode');
  }
  get joningdate() {
    return this.register.get('joningdate');
  }
}
