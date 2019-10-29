import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  @Output() sibling1Emitter = new EventEmitter();
  sendToSibling(userInput){
    this.sibling1Emitter.emit(userInput);
  }
  constructor() { }

  ngOnInit() {
  }

}
