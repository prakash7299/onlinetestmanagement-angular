export class AssignExamToUser{
    id:number;
    status:string;
    dateOfExam:string;
    userId:number;
    examId:number;

    constructor(status:string,dateOfExam:string,userId:number,examId:number){
      this.status=status;
      this.userId=userId;
      this.dateOfExam=dateOfExam;
      this.userId=userId;
      this.examId=examId;
    }
    getId():number{
      return this.userId;
    }
  
    isStatus():string{
      return this.status;
    }
  
    getDateOfExam():string{
      return this.dateOfExam;
    }
    getUserId():number{
      return this.userId;
    }
    getExamId():number{
      return this.examId;
    }

  }
  