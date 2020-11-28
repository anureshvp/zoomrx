import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../cards/card'

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  @Input() card : Card;
  constructor() { }

  ngOnInit(): void {
  }

}
