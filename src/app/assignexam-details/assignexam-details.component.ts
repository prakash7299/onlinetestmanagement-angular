import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import {AssignExamToUser} from '../model/assignexamtouser'
import { Service } from '../service/service';

@Component({
  selector: 'app-assignexam-details',
  templateUrl: './assignexam-details.component.html',
  styleUrls: ['./assignexam-details.component.css']
})
export class AssignexamDetailsComponent{
  constructor(private route:ActivatedRoute, private assignService:Service) {

    let observable =route.paramMap;//param map is the property in activated route
    observable.subscribe((params:ParamMap)=>{
     let idVal:string =params.get("id");
     let idNum:number=Number(idVal);//converting string to number
     console.log("id available is "+idNum);
     this.findUserById(idNum);
    })
    }
 
    assignexamtouser:AssignExamToUser;
 
 
    findUserById(id:number){
     let observable:Observable<AssignExamToUser>=this.assignService.getAssignexam(id);
     observable.subscribe(
       userArg=>{
         this.assignexamtouser=userArg;
       },
 
       err=>{
         console.log("isnide exam details, err is "+err.message);
       }
 
     );
    }
 
   findUser(form:any){
     let data=form.value;
     let id=data.id;
    this.findUserById(id);
   }

  

}
