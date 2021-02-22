import { Injectable } from '@angular/core';
import { Tasks } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  localStorage: Storage;
  lastKey: number;
  sortedKeys: Array<number>;


  constructor() {
    this.localStorage = window.localStorage;
    this.lastKey = 0;
    this.sortedKeys = [];
  }

  getTasks() {
    let results = [];
    if (localStorage.length === 0) {
      results = [
        { entry: 'This is a general template of a task 1', status: false, taskNumber: 1 },
        { entry: 'This is a general template of a task 2', status: true, taskNumber: 2 },
        { entry: 'This is a general template of a task 3', status: false, taskNumber: 3 },
      ]
    }
    else {
      let key: string;
      for (let i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);  
        let value = localStorage.getItem(key);
        let item = JSON.parse(value)
        results.push(item);
        this.sortedKeys.push(item['taskNumber']);        
      }

    }
    this.lastKey=Math.max(...this.sortedKeys)+1;
    return results.sort((a,b) => a['taskNumber']-b['taskNumber']);
  }

  set(value: Tasks): boolean { 
    if(localStorage.length == 0)
      this.lastKey = 0;    
    value['taskNumber'] = this.lastKey;
    localStorage.setItem(JSON.stringify(this.lastKey), JSON.stringify(value));
    return true;
  }

  remove(taskNumber: number): boolean {
    localStorage.removeItem(JSON.stringify(taskNumber));    
    return true;
  }

}
