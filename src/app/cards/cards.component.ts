import { Component, OnInit } from '@angular/core';
import { Card } from './card';
import { CARDS } from './dummy-cards';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards = CARDS;

  selectedCard: Card;
  onSelect(Card: Card): void {
    this.selectedCard = Card;
  }

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
