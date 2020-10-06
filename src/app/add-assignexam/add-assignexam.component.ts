import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AssignExamToUser } from '../model/assignexamtouser';
import { Service } from '../service/service';

@Component({
  selector: 'app-add-assignexam',
  templateUrl: './add-assignexam.component.html',
  styleUrls: ['./add-assignexam.component.css']
})
export class AddAssignexamComponent{

  constructor(private assignexamService: Service) {
  }

  assignexamtouser: AssignExamToUser;

  addAssignExam(form: any) {
    let data = form.value;
    let status = data.status;
    let dateOfExam = data.dateOfExam;
    let userId=data.userId;
    let examId=data.examId;
    this.assignexamtouser = new AssignExamToUser(status,dateOfExam,userId,examId);
    let successFun = (examArg: AssignExamToUser) => {
      this.assignexamtouser = examArg;
    };

    let errFun = err => {
      console.log("err in addexamcomponent " + err.message);
    }

    let observable: Observable<AssignExamToUser> = this.assignexamService.assignExam(this.assignexamtouser);
    observable.subscribe(successFun, errFun);
  }
}
