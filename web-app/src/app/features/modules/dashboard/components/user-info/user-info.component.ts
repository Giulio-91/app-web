import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  template: 
    `<div>  
      <img src="/assets/user.png" class="user-info-container">
    </div>`,
  styles: [
    `img {
      zoom:3%;
    }`
  ],
})
export class UserInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
