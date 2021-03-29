import { Component, OnInit } from '@angular/core';
import {TaskTrackerService} from '../task-tracker.service';
import {Task} from '../task.model';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.css']
})
export class TaskTrackerComponent implements OnInit {
  tasks:Array<Task> = []
  constructor(public taskService:TaskTrackerService) { }

  ngOnInit(): void {
    this.taskService.loadTasks().subscribe(result=>this.tasks=result,error=>console.log(error));
  }
  storeTask(taskRef:any){
    console.log(taskRef);
    this.taskService.storeTask(taskRef);
  }

}
