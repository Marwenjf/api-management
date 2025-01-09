import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginFormGroup! : FormGroup;
  constructor(private fb : FormBuilder,private authService : AuthenticationService, private router : Router) { }

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      username : this.fb.control(''),
      password : this.fb.control('')
    });
  }


  login() {
    let username = this.loginFormGroup.value.username;
    let password = this.loginFormGroup.value.password;
    console.log(this.loginFormGroup.value);
    let auth = this.authService.login(username, password);
    if(auth==true){
      console.log(auth);
      this.router.navigateByUrl("/admin");
    }
  }

}
