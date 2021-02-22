import { Component } from '@angular/core';
import { Tasks } from './tasks';
import { ToDoService } from './to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoMinimal';
  listOfTasks: Array<Tasks>;
  input: string;
  popupOpen: boolean = false;
  select: number = 0;

  constructor(private toDoService: ToDoService){
  }
  ngOnInit():void{
    this.listOfTasks = this.toDoService.getTasks();
  }

  submitNew(input: string){ 
    this.toDoService.set({entry: input, status: false, taskNumber: 1});    
    this.ngOnInit();
  }

  onDelete(index: number){    
    this.toDoService.remove(index);
    this.popupOpen = !this.popupOpen;
    this.select = index;
    this.ngOnInit();
  }

  onClick(ind: number){
    this.select = ind;    
    this.popupOpen = !this.popupOpen;
    this.ngOnInit();
  }

}
