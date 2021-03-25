import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {
  flag:boolean = false;
  b1:string= "show";
  stdNames:Array<string>=["Liam","table","finger","protein"]
  skillNames:Array<string>=[];
  emp:Employee = new Employee(100,"abc",1200);
  employees:Array<Employee>=new Array();
  constructor() { 
    let emp1 = new Employee(1,"Reeta",16000);
    let emp2 = new Employee(2,"meeta",180000);
    let emp3 = new Employee(3,"seeta",4500);
    this.employees.push(emp1);
    this.employees.push(emp2);
    this.employees.push(emp3);


  }

  ngOnInit(): void {
  }
  change(){
    this.flag = !this.flag;
    if(this.flag) this.b1 = "hide";
    else this.b1 = "show";
  }
  addSkillName(skill:any){
    this.skillNames.push(skill);
  }
}
