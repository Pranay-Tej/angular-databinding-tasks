import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand',
  templateUrl: './grand.component.html',
  styleUrls: ['./grand.component.css']
})
export class GrandComponent implements OnInit {

  public userInput;
  setUserInput(userInput){
    this.userInput=userInput;
  }
  constructor() { }

  ngOnInit() {
  }

}
