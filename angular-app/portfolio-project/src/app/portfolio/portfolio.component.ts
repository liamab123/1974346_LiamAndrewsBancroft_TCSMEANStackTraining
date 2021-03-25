import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Contact} from './contact.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  username:any = "";
  tableRef = new FormGroup({
    name: new FormControl(),
    phoneNumber: new FormControl()

  });
  contacts:Array<Contact> = [];
  constructor() {
    if (sessionStorage.getItem("curUser")!=null){
      this.username = sessionStorage.getItem("curUser");
      this.username = JSON.parse(this.username);
    }
   }

  ngOnInit(): void {
  }
  addToTable(){
    let curName = this.tableRef.get("name")?.value;
    console.log(curName);
    let curNum = this.tableRef.get("phoneNumber")?.value;
    console.log(curNum);
    let con = new Contact (curName,curNum);
    this.contacts.push(con);
    this.tableRef.reset();
  }

}
