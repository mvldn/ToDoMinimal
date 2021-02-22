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

  constructor(private toDoService: ToDoService){
  }
  ngOnInit():void{
    this.listOfTasks = this.toDoService.getTasks();
  }

}
