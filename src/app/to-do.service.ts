import { Injectable } from '@angular/core';
import { Tasks } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  localStorage: Storage;
  lastKey: number;
  sortedKeys: Array<number>;
  allEntries: Array<string> = [];


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
        this.allEntries.push(item['entry']);       
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

  update(key: string){
    let item = JSON.parse(localStorage.getItem(key));
    if(item['status'] === false)
      item['status'] = true;
    else
      item['status'] = false;
    
    localStorage.setItem(key, JSON.stringify(item));
    return true;
  }

  compare(imported: Array<Tasks>){
    let cur = 0;

    while(cur < imported.length){
      if( this.allEntries.indexOf(imported[cur]['entry']) === -1 ){        
        this.lastKey =  Math.max(this.lastKey,imported[cur]['taskNumber'])+1;
        this.set(imported[cur]);
      }
      cur++;
    } 
  }
}
