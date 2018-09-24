import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';


@Component({
  selector: 'dashboard-container',
  template: 
  `<div class="dashboard-container container-fluid">
    <app-expand-button (click)='openCloseMenu()'></app-expand-button>
    <app-user-info (click)='openCloseUserDetail()'></app-user-info>
  </div>
  <div *ngIf="menuOpen" [@enterAnimation]="menuOpen">
    <app-lateral-menu></app-lateral-menu>
  </div>
  <div *ngIf="userDetailOpen">
    <app-user-detail></app-user-detail>
  </div>`,
  styles: [
    `.dashboard-container {
      background-color: #1976D2;
      color: white;
      text-align: center;
      min-height: 4rem;
      box-shadow: 0px 0px 20px 0px rgba(29, 28, 28, 0.842);
      position: sticky;
      z-index: 100;
      display:flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 0px;
    }`
  ],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(-100%)', opacity: 0}),
          animate('400ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('400ms', style({transform: 'translateX(-100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class ContainerComponent implements OnInit {

  menuOpen: boolean = true;
  userDetailOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openCloseMenu () {
    this.menuOpen = !this.menuOpen;
  }

  openCloseUserDetail () {
    this.userDetailOpen = !this.userDetailOpen; 
  }

}
