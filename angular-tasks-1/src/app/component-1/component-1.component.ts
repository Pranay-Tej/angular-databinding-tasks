import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';

@Component({
  selector: 'app-component-1',
  templateUrl: './component-1.component.html',
  styleUrls: ['./component-1.component.css']
})
export class Component1Component implements OnInit {
  displayInConsole(userInput){
    console.log(userInput);
  }
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}