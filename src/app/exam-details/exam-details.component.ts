import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import {Exam} from '../model/exam'
import { Service } from '../service/service';

@Component({
  selector: 'app-exam-details',
  templateUrl: './exam-details.component.html',
  styleUrls: ['./exam-details.component.css']
})
export class ExamDetailsComponent  {

  constructor(private route:ActivatedRoute, private userService:Service) {

   let observable =route.paramMap;//param map is the property in activated route
   observable.subscribe((params:ParamMap)=>{
    let idVal:string =params.get("examId");
    let idNum:number=Number(idVal);//converting string to number
    console.log("id available is "+idNum);
    this.findUserById(idNum);
   })
   }

   exam:Exam;


   findUserById(examId:number){
    let observable:Observable<Exam>=this.userService.getExam(examId);
    observable.subscribe(
      userArg=>{
        this.exam=userArg;
      },

      err=>{
        console.log("isnide exam details, err is "+err.message);
      }

    );
   }

  findUser(form:any){
    let data=form.value;
    let examId=data.examId;
   this.findUserById(examId);
  }

}

