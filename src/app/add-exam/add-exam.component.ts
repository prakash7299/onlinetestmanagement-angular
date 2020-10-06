import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from '../model/exam';
import { Service } from '../service/service';

@Component({
  selector: 'add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent {

  constructor(private examService: Service) {
  }

  exam: Exam;

  addExam(form: any) {
    let data = form.value;
    let examName = data.examName;
    let minutes = data.minutes;
    this.exam = new Exam(examName,minutes);
    let successFun = (examArg: Exam) => {
      this.exam = examArg;
    };

    let errFun = err => {
      console.log("err in addexamcomponent " + err.message);
    }

    let observable: Observable<Exam> = this.examService.addExam(this.exam);
    observable.subscribe(successFun, errFun);
  }

}