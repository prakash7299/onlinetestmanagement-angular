export class User{
    userId:number;
    userName:string;
    password:string;
    role:string;

    constructor(userName : string, password:string, role:string){
      this.userName=userName;
      this.password=password;
      this.role=role;
    }
    getId():number{
      return this.userId;
    }
  
    getUsername():string{
      return this.userName;
    }
  
    getPassword():string{
      return this.password;
    }
  
    getRole():string{
      return this.role;
    }

  }
  