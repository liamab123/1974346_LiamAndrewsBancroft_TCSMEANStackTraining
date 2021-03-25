import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent implements OnInit {
  msg:string = "";
  constructor() { }

  ngOnInit(): void {
  }
  checkUser(loginRef:any){
    console.log("event generated");
    console.log(loginRef);
    let user1 = loginRef.user;
    let pass1 = loginRef.pass;
    if(user1 == "Liam" && pass1 == "123"){
      this.msg = "success";
    }
    else this.msg = "failure";
  }

}
