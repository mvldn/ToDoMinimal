import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
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
      for (let i = 0; i < localStorage.length; i++) {
        results.push(localStorage.key(i));
      }
    }
    return results;
  }
}
