import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { AddAssignexamComponent } from './add-assignexam/add-assignexam.component';
import { AssignexamDetailsComponent } from './assignexam-details/assignexam-details.component';
import { AssignListComponent } from './assign-list/assign-list.component';



const routes: Routes = [
  {
    path:"app-home",
    component:HomeComponent
  },
//wheneever someone has list in uri, it will be naviagted to user-list
{
  path:'',
  redirectTo :'app-home',
  pathMatch:'full'
},

  {
    path:'user-details/:id',
    component:UserDetailsComponent
  },
  {
    path:'user-details',
    component:UserDetailsComponent
  },
  {
    path: 'add-user',
    component:AddUserComponent
  },
  {
    path: 'add-exam',
    component:AddExamComponent
  },
  {
    path: 'app-exam-details',
    component:ExamDetailsComponent
  },
  {
    path:'app-add-assignexam',
    component: AddAssignexamComponent
  },
  {
    path:'app-assignexam-details',
    component: AssignexamDetailsComponent
  },
  {
    path:'app-assign-list',
    component: AssignListComponent
  }

 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
