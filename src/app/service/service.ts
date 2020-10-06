import { Injectable } from '@angular/core';
import { from, observable, Observable } from 'rxjs';
import { User } from '../model/user';
import {Exam} from '../model/exam';
import {HttpClient} from '@angular/common/http'
import { AssignExamToUser } from '../model/assignexamtouser';

@Injectable()
export class Service{

    baseUrl="http://localhost:8585/onlinetestmanagement";

    constructor(private http:HttpClient){

    }

    addUser(user:User):Observable<User>{
     let url=this.baseUrl+"/user/add";   
     let observable:Observable<User>=this.http.post<User>(url,user);
     return observable;
    }
    addExam(user:Exam):Observable<Exam>{
        let url=this.baseUrl+"/exam/add";   
        let observable:Observable<Exam>=this.http.post<Exam>(url,user);
        return observable;
    }

    assignExam(assign:AssignExamToUser):Observable<AssignExamToUser>{
        let url=this.baseUrl+"/admin/assignexam";   
        let observable:Observable<AssignExamToUser>=this.http.post<AssignExamToUser>(url,assign);
        return observable;
    }

    getUser(id:number):Observable<User>{
        let url=this.baseUrl+"/user/get/"+id;
        let observable:Observable<User>=this.http.get<User>(url);
        return observable;
    }
    getExam(id:number):Observable<Exam>{
        let url=this.baseUrl+"/exam/get/"+id;
        let observable:Observable<Exam>=this.http.get<Exam>(url);
        return observable;
    }
    getAssignexam(id:number):Observable<AssignExamToUser>{
        let url=this.baseUrl+"/admin/assignedexam/get/"+id;
        let observable:Observable<AssignExamToUser>=this.http.get<AssignExamToUser>(url);
        return observable;
    }
    getAllAssigned():Observable<AssignExamToUser[]>{
        let url=this.baseUrl+"/admin/assignExamList";
        let observable:Observable<AssignExamToUser[]>=this.http.get<AssignExamToUser[]>(url);
        return observable;
    }

    removeAssigned(id:number):Observable<void>{
        let url=this.baseUrl+"/admin/delete/"+id;
        let observable:Observable<void>=this.http.delete<void>(url);
        return observable;
    }

   

}
