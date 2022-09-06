import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherlistComponent } from './teacher/teacherlist/teacherlist.component';
import { TeachercreateComponent } from './teacher/teachercreate/teachercreate.component';
import { StudentlistComponent } from './student/studentlist/studentlist.component';
import { StudentcreateComponent } from './student/studentcreate/studentcreate.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WorkercreateComponent } from './worker/workercreate/workercreate.component';
import { WorkerlistComponent } from './worker/workerlist/workerlist.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { TeacherService } from './service/teacher.service';

@NgModule({
  declarations: [
    AppComponent,
    TeacherlistComponent,
    TeachercreateComponent,
    StudentlistComponent,
    StudentcreateComponent,
    HomeComponent,
    LoginComponent,
    WorkercreateComponent,
    WorkerlistComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
