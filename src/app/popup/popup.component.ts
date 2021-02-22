import { Component, OnInit, ElementRef, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Output() confirm = new EventEmitter<number>();
  @Input() index: number; 
  

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }
  
  onConfirm(){
    this.confirm.emit(this.index);
  }
}
