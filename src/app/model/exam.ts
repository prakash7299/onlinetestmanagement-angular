export class Exam{
    examId:number;
    examName:string;
    minutes:number;

    constructor(examName : string,minutes:number){
      this.examName=examName;
      this.minutes=minutes;
    }
    getId():number{
      return this.examId;
    }
  
    getExamname():string{
      return this.examName;
    }
  
    getMinutes():number{
      return this.minutes;
    }
  

  }
  