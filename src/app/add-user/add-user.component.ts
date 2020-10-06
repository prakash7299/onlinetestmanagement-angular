import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Service } from '../service/service';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(private userService: Service) {
  }

  user: User;

  addUser(form: any) {
    let data = form.value;
    let role = data.role;
    let userName = data.userName;
    let password = data.password;
    this.user = new User(userName, password, role);
    let successFun = (userArg: User) => {
      this.user = userArg;
    };

    let errFun = err => {
      console.log("err in addusercomponent " + err.message);
    }

    let observable: Observable<User> = this.userService.addUser(this.user);
    observable.subscribe(successFun, errFun);
  }

}
