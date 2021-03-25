import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRef = new FormGroup({
    user: new FormControl(),
    pass:new FormControl()
  });
  msg:string= "";

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  logIn(){
    let currentUser = this.loginRef.get("user")?.value;
    console.log(currentUser);
    let currentPass = this.loginRef.get("pass")?.value;
    console.log(currentPass)
    let cU:any = "";
    let cP:any = "";
    if(sessionStorage.getItem("curUser") != null && sessionStorage.getItem("curPass") != null){
      cU = sessionStorage.getItem("curUser"); //Is there a better way around this clunky seeming process? 
      cU = JSON.parse(cU);
      console.log(cU);
      cP = sessionStorage.getItem("curPass");
      cP = JSON.parse(cP);
      console.log(cP);
    }
    console.log(currentUser.toString());
    console.log(currentUser.toString() == cU);
    if(currentUser.toString() == cU && currentPass.toString() == cP){ 
    this.router.navigate(["home"]);
    }
    else this.msg = "Login Failed: Try again or Create Account";
  }
  goToSignUp(){
    this.router.navigate(["signup"]);
  }
}
