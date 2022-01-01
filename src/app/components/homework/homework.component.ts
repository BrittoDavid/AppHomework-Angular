import { Homework } from './../../models/homework';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit 
{

  listTask : Homework[] = [];
  nameTask = "";
  number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  alertTask(): void
  {
    //Validating if the name diferrent to empty
    if (this.nameTask != "") 
    {
      this.addTask();
      this.number = 1;
      
    }else
    {
      this.number = 0;
    }

  }

  addTask(): void
  {
    //Create  homework object
    const homework: Homework = 
    {
      name: this.nameTask,
      status: false
    }

    //Adding the homework object to array 
    this.listTask.push(homework);

    //Reset form
    
    this.nameTask = "";
  }


  deleteTask(index:number): void
  {
    this.listTask.splice(index,1);
  }

  updateTask(index:number, homework: Homework): void
  {
    this.listTask[index].status = !homework.status;
  }

}
