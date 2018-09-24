import { Component, OnInit, Input } from '@angular/core';
import { menuVoice } from "../../model/menu-interface";

@Component({
  selector: 'app-menu-voice',
  template: 
  `<div class="menu-voice">
    <div class="text">{{voice.name}}</div>
    <div class="expand-button"></div>
  </div>`,
  styles: [
    `.menu-voice {
      height: 2.5rem;
      width: 100%;
      margin-bottom: 0.3rem;
      display: flex;
      align-items:center;
    }
    .menu-voice:hover {
      background-color: rgba(194, 194, 194, 0.815);
      color: #267ED4;
    }
    .text {
      padding-left: 10px;
    }`
  ]
})
export class MenuVoiceComponent implements OnInit {

  @Input() voice: menuVoice;

  constructor() { }

  ngOnInit() {
  }

}
