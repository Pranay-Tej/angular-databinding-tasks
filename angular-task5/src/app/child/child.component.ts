import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() childEmitter = new EventEmitter(); 
  sendToParent(userInput){
    this.childEmitter.emit(userInput);
  }
  constructor() { }

  ngOnInit() {
  }

}
