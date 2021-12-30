import { Homework } from './../../models/homework';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit 
{

  listHomework : Homework[] = [];
  nameHomework = "";
  number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  alertHomework(): void
  {
    //Validating if the name diferrent to empty
    if (this.nameHomework != "") 
    {
      this.addHomework();
      this.number = 1;
      
    }else
    {
      this.number = 0;
    }

  }

  addHomework(): void
  {
    //Create  homework object
    const homework: Homework = 
    {
      name: this.nameHomework,
      status: false
    }

    //Adding the homework object to array 
    this.listHomework.push(homework);

    //Reset form
    
    this.nameHomework = "";
  }


  deleteHomework(index:number): void
  {
    this.listHomework.splice(index,1);
  }

  updateHomework(index:number, homework: Homework): void
  {
    this.listHomework[index].status = !homework.status;
  }

}
