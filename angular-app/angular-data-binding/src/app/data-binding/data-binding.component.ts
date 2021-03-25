import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  fname:string = "liam";
  lname:string = "andrews-bancroft";
  constructor() { }

  ngOnInit(): void {
  }
  fun():void{
    console.log("event fired...");
  }
  changeName():void{
    this.fname += "1";
  }
  addSkill(skill:any){
    console.log("skill name is" + skill);
  }
}
