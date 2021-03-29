import { Component, OnInit } from '@angular/core';
import {Question} from "../question.model";
import {QuestionService} from '../question.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-test-app',
  templateUrl: './test-app.component.html',
  styleUrls: ['./test-app.component.css']
})
export class TestAppComponent implements OnInit {
  questions:Array<Question> = [];
  qRef = new FormGroup({
    
  });
  constructor(public questionservice:QuestionService) { }

  ngOnInit(): void {
    this.questionservice.loadQuestion().subscribe(result=>this.questions=result,error=>console.log(error));
  }
  testSubmit(){
     console.log("event generated");
  }
}
