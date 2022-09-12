import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormArray,FormBuilder , ControlContainer} from '@angular/forms';
import { StudentService } from '../../service/student.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-studentcreate',
  templateUrl: './studentcreate.component.html',
  styleUrls: ['./studentcreate.component.css'],
})
export class StudentcreateComponent implements OnInit {
  studentid: any;
  editdata: any;
  students:any
  constructor(
    private service: StudentService,
    private rout: Router,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr:ToastrService
  ) {
    this.studentid = this.router.snapshot.paramMap.get('id');
    if (this.studentid != null) {
      this.update(this.studentid);
    }
  }
  register = new FormGroup({
    id: new FormControl(),
    studentname: new FormControl('', Validators.required),
    fathername: new FormControl('', Validators.required),
    phonenumber: new FormControl('', Validators.required),
    mothername: new FormControl('', Validators.required),
    standard: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    language: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    pincode: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    bloodgroup: new FormControl('', Validators.required),
    eightboard: new FormControl('', Validators.required),
    eightpercentage: new FormControl('', Validators.required),
    eigthpassing: new FormControl('', Validators.required),
    tenthboard: new FormControl('', Validators.required),
    tenthpercentage: new FormControl('', Validators.required),
    tenthpassing: new FormControl('', Validators.required),
   
  });
  
  form = this.formBuilder.group({
    orders: new FormArray([])
    });
  ngOnInit(): void {}


  savestudent() {
   
      if (this.register.value.id != null) {
        this.service.updatestudent(this.register.value.id,this.register.value).subscribe((res) => {
          if (res != null) {
           
         this.toastr.success('updated successfully')
          
            this.rout.navigateByUrl('/student/studentlist');
           
           
          }
        });
      }
    
      else{
        
       
    
      this.service.savestudent(this.register.value).subscribe((result) => {
        if(result!=null)
        {
          this.students=result;
        this.rout.navigateByUrl('/student/studentlist');
        
        }
      });
     
    } 
      
  }

  update(id: any ) {
    this.service.loadstudentbycode(id).subscribe((data) => {
          this.editdata = data;
this.register=new FormGroup({
  id: new FormControl(this.editdata.id),
  studentname: new FormControl(this.editdata.studentname),
  fathername: new FormControl(this.editdata.fathername),
  phonenumber: new FormControl( this.editdata.phonenumber),
  bloodgroup: new FormControl(this.editdata.bloodgroup),
  mothername: new FormControl(this.editdata.mothername),
  standard: new FormControl(this.editdata.standard),
  dob: new FormControl(this.editdata.dob),
  gender: new FormControl(this.editdata.gender),
  language: new FormControl( this.editdata.language),
  state: new FormControl( this.editdata.state),
  city: new FormControl( this.editdata.city),
  address: new FormControl( this.editdata.address),
  pincode: new FormControl( this.editdata.pincode),
  eightboard: new FormControl( this.editdata.eightboard),
  eightpercentage: new FormControl( this.editdata.eightpercentage),
  eigthpassing:new FormControl( this.editdata.eigthpassing),
 tenthboard: new FormControl( this.editdata.tenthboard),
  tenthpercentage: new FormControl( this.editdata.tenthpercentage),
  tenthpassing: new FormControl(this.editdata.tenthpassing),
 
});


    })
  }
  get studentname() {
    return this.register.get('studentname');
  }
  get fathername(){
    return this.register.get('fathername')
  }
  get mothername(){
    return this.register.get('mothername')
  }
  get phonenumber(){
    return this.register.get('email')
  }
  get bloodgroup(){
    return this.register.get('bloodgroup')
  }
  get dob(){
    return this.register.get('dob')
  }

  get city(){
    return this.register.get('city')
  }
  get gender(){
    return this.register.get('gender')
  }
  get standard(){
    return this.register.get('standard')
  }
  get state(){
    return this.register.get('state')
  }
  get address(){
    return this.register.get('address')
  }
  get country(){
    return this.register.get('country')
  }
  get pincode(){
    return this.register.get('pincode')
  }
  get language(){
    return this.register.get('language')
  }

 
}
