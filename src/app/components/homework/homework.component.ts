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

  constructor() { }

  ngOnInit(): void {
  }

  addHomework(): void
  {

    //Validating if the name diferrent to empty
    if (this.nameHomework != "") 
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

    }else
    {
      alert('It cannot be emty');
    }
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
