import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Input() userInput;
  // @Input() ('userInput') public dataFromParent; // To store with different variable name
  constructor() { }

  ngOnInit() {
  }

}
