import { Component } from '@angular/core';
import { Task } from 'src/app/home/expo.task';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
// Title: String ='';
// Description: String='';
public Title: string = '';
public Description: string = '';
public Repp: boolean = false;
Jtask: Task[] = [];
  constructor() {}

addTask(){
  if (this.Title.length >= 3 && this.Description.length >= 10){
    const newTask: Task = {
      title: this.Title,
      description: this.Description,
      Done: false,
      
    }
    this.Jtask.push(newTask)
    this.resetFields();
    console.log('', this.Jtask);
   }
  }

  resetFields(){
this.Title = '';
this.Description = '';

  }

ValidRequirement(){
  this.Repp = this.Title.length >= 3 && this.Description.length >= 10; 
  }





  marAsDone(task:Task){
    const index = this.Jtask.indexOf(task);
    if(index !== 1){
      this.Jtask[index].Done = true;
    }
  }
}