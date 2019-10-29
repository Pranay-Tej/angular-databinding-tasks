import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  @Input() userInput;
  constructor() { }

  ngOnInit() {
  }

}
