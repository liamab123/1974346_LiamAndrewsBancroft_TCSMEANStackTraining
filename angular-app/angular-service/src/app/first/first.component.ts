import { Component, OnInit } from '@angular/core';
import { MyService } from '../custom.service';
import {FakeService} from '../fake.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  //providers:[FakeService]

})
export class FirstComponent implements OnInit {
  msg1:string = "";
  msg2:string = "";
  constructor(public service:FakeService) { }

  ngOnInit(): void {
  }
  fun(){
    let obj = new MyService();
    this.msg1= obj.sayHello();
  }
  display(){
    this.msg2 = this.service.sayHello();
  }    
  callFakeService(){
    this.service.loadFakeData();
  }
}
