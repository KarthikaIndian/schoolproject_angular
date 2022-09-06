import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StudentComponent } from './student/student.component';
import { StudentcreateComponent } from './student/studentcreate/studentcreate.component';
import { StudentlistComponent } from './student/studentlist/studentlist.component';
import { TeachercreateComponent } from './teacher/teachercreate/teachercreate.component';
import { TeacherlistComponent } from './teacher/teacherlist/teacherlist.component';
import { WorkercreateComponent } from './worker/workercreate/workercreate.component';
import { WorkerlistComponent } from './worker/workerlist/workerlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'teacher/teachercreate',component:TeachercreateComponent},
  {path:'teacher/edit/:id',component:TeachercreateComponent},
  {path:'teacher/teacherlist',component:TeacherlistComponent},
  {path:'student/studentlist',component:StudentlistComponent},
  {path:'student/studentcreate',component:StudentcreateComponent},
  {path:'student/edit/:id',component:TeachercreateComponent},
  {path:'worker/workercreate',component:WorkercreateComponent},
  {path:'worker/workerlist',component:WorkerlistComponent},
  {path:'worker/edit/:id',component:TeachercreateComponent},
  {path:'student',component:StudentComponent},
  // { path: '**', redirectTo: 'student/studentlist' },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
