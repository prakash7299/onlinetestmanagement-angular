import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AssignExamToUser } from '../model/assignexamtouser';
import { Service } from '../service/service';
@Component({
  selector: 'app-assign-list',
  templateUrl: './assign-list.component.html',
  styleUrls: ['./assign-list.component.css']
})
export class AssignListComponent {

  users:AssignExamToUser[];

  constructor(private userService:Service) {
    let observable:Observable<AssignExamToUser[]>=userService.getAllAssigned();
    observable.subscribe(
      userArr=>{
        this.users=userArr;
      },
      err=>{
        console.log("inside UserListComponent err is "+err.message);
      }

    );
   }

  removeAssigned(id:number){
 let observable=this.userService.removeAssigned(id);
 observable.subscribe(
   res=>{
    this.removeLocalElement(id);
   },
   err=>{
     console.log("inside removeuser, err is "+err.message);
   }
 );
  }

  removeLocalElement(id:number):void{
    console.log("before user removed,length="+this.users.length); 
    for(let i=0 ;i<this.users.length;i++ ){
       let user=this.users[i];
        if(user.userId===id){
            //index and number of elements to remove
            this.users.splice(i,1);
        }
     }
       
}
 
}
