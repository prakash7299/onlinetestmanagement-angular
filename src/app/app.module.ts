import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { Service } from './service/service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { AssignExamComponent } from './assign-exam/assign-exam.component';
import { AddAssignexamComponent } from './add-assignexam/add-assignexam.component';
import { AssignexamDetailsComponent } from './assignexam-details/assignexam-details.component';
import { AssignListComponent } from './assign-list/assign-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    AddUserComponent,
    HomeComponent,
    AddExamComponent,
    ExamDetailsComponent,
    AssignExamComponent,
    AddAssignexamComponent,
    AssignexamDetailsComponent,
    AssignListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [Service,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
