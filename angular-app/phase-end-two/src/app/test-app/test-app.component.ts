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
  numCorrect:number = 0;
  userAnswers: Array<string> = [];
  correctAndUser: Array<string> = [];
  pass:boolean = false; 
  done:boolean = false;
  constructor(public questionservice:QuestionService) { }

  ngOnInit(): void {
    this.questionservice.loadQuestion().subscribe(result=>this.questions=result,error=>console.log(error));
  }
  testSubmit(testRef:any){
     console.log("event generated");
     console.log(testRef); 
     for(var q of this.questions){
     for(var o of q.answers){;
       if(o.selected&&o.isAnswer){
         q.correct = true;
       }
       if(o.selected){
         this.userAnswers.push(o.option);
       }
     }
     console.log("Correct? " + q.correct);
     if(q.correct){
       this.numCorrect++;
     }
     }
     this.showAnswers();
     this.done = true;
     if(this.numCorrect >= 6) this.pass = true;
     window.scrollTo(0, 0);
  }
  showAnswers(){
    for(var i = 0; i<this.questions.length;i++){
      let displayString = (i+1).toString() + ". ";
      displayString += "You Answered: ";
      displayString += this.userAnswers[i];
      if(this.questions[i].correct){
        displayString += ". Correct!";
      }
      else{
        displayString += ". Incorrect. Correct Answer: ";
        displayString += this.questions[i].answers[this.questions[i].answerIndex].option;
      }
      this.correctAndUser.push(displayString);
    }
  }
}
