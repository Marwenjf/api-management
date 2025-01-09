import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public username : any;
  public roles : string[] = [];
  public authenticated : boolean =false;
  public users:any = {
    admin : {password:'12345',roles:['STUDENT','ADMIN']},
    user1 : {password: '12345',roles: ['STUDENT']}
  }
  constructor(private router : Router) { }

  public login(username : string, password : string){
    if(this.users[username] && password==this.users[username]['password']){
      this.username = username;
      this.roles = this.users[username]['roles'];
      this.authenticated = true;
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.authenticated=false;
    this.username = undefined;
    this.roles = [];
    this.router.navigateByUrl("/login");
  }
}
