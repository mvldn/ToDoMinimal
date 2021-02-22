import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tasks } from '../tasks';
@Component({
  selector: 'app-task-bar',
  templateUrl: './task-bar.component.html',
  styleUrls: ['./task-bar.component.css']
})
export class TaskBarComponent implements OnInit {
  @Input() taskList: Array<Tasks> = [];
  @Output() selected = new EventEmitter<number>();
  @Output() completed = new EventEmitter<number>();
  popupOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(ind: number){
    this.selected.emit(ind);
    console.log(ind);
    this.popupOpen = !this.popupOpen;
  }
  updateValue(numKey: number){    
    this.completed.emit(numKey);
    this.ngOnInit();
  }

}
