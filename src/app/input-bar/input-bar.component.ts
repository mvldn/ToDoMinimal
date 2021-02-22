import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.css']
})
export class InputBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  input:string = '';
  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(event: any){
    event.preventDefault();
    this.submitted.emit(this.input);    
    this.ngOnInit();
  }

}
