import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Output() parentEmitter = new EventEmitter();
  sendToGrand(userInput){
    this.parentEmitter.emit(userInput);
  }
  constructor() { }

  ngOnInit() {
  }

}
