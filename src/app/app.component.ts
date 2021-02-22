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

  constructor(private toDoService: ToDoService) {
  }
  ngOnInit(): void {
    this.listOfTasks = this.toDoService.getTasks();
  }

  submitNew(input: string) {
    this.toDoService.set({ entry: input, status: false, taskNumber: 1 });
    this.ngOnInit();
  }

  onDelete(index: number) {
    this.toDoService.remove(index);
    this.popupOpen = !this.popupOpen;
    this.select = index;
    this.ngOnInit();
  }

  onClick(ind: number) {
    this.select = ind;
    this.popupOpen = !this.popupOpen;
    this.ngOnInit();
  }

  onUpdateValue(keyNum: number) {
    this.toDoService.update(JSON.stringify(keyNum));
    this.ngOnInit();
  }

  onExport() {
    const data = JSON.stringify(this.listOfTasks);
    let saveData = (function () {
      let a = document.createElement("a");
      document.body.appendChild(a);
      return function (data, fileName) {
        var json = JSON.stringify(data),
          blob = new Blob([json], { type: "octet/stream" }),
          url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
      };
    }());

    saveData(data, "todo_export.txt");
  }

}
