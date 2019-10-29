import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public userInput;
  passToChild2(userInput){
    this.userInput=userInput;
  }
  constructor() { }

  ngOnInit() {
  }

}
