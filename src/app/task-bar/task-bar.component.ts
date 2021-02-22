import { Component, OnInit, Input } from '@angular/core';
import { Tasks } from '../tasks';
@Component({
  selector: 'app-task-bar',
  templateUrl: './task-bar.component.html',
  styleUrls: ['./task-bar.component.css']
})
export class TaskBarComponent implements OnInit {
  @Input() taskList: Array<Tasks> = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
