import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Output() component2Emitter = new EventEmitter();
  sendToParent(userInput){
    this.component2Emitter.emit(userInput);
  }
  constructor() { }

  ngOnInit() {
  }

}
