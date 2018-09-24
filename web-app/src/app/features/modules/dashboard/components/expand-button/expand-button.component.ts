import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expand-button',
  template: 
    `<div class="expand-button-container">
      <div class="expand-button">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>`,
  styleUrls: ['./expand-button.component.css']
})
export class ExpandButtonComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
  }
  
}
