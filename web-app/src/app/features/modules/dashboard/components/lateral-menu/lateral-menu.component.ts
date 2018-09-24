import { Component, OnInit } from '@angular/core';

import { MENU } from '../../model/menu-list';

@Component({
  selector: 'app-lateral-menu',
  template: 
    `<div class="menu-container">
      <div *ngFor="let voice of menu">
        <app-menu-voice [voice]="voice"></app-menu-voice>
      </div>
    </div>`,
  styles: [`
    .menu-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 0.3rem;
      position: relative;
      background-color: #FAFAFA;
      width: 20%;
      height: 100vh;
      overflow: auto;
    }
    @media screen and (max-width: 600px) {
        .menu-container {
            width: 100%;
            max-height: 30vh;
            padding: 0.3rem 0.5rem;
        }
    }`
  ],
  animations: []
})
export class LateralMenuComponent implements OnInit {

  //
  menu = MENU;
  

  constructor() { }

  ngOnInit() {
  }

}
