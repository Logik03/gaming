import { Component, Input, Output, OnInit } from '@angular/core';
import { Game, Jackpot } from '../../interfaces';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
  top = false;
  new = true;
  @Input() gameList : Game[];
  @Input() componentName : string;
  constructor() { }

  ngOnInit(): void {

  }

}
