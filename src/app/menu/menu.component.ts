import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() chosenCategory = new EventEmitter();
  selected: any;
  categories: string[];  

  constructor() {
    this.categories = [
      'Just for starters',
      'Salads',
      'Hand-cut steaks',
      'Fall-off-the-bone ribs',
      'texas size combos',
      'chicken specialties',
      'country dinners',
      'dockside favorites',
      'burgers & sandwiches',
      'kids & ranger meals',
      'extras',
      'desserts',
      'beverages'
    ];
   }

  ngOnInit(): void {
    this.selected = this.categories[0];
    this.chosenCategory.emit(0);
  }

  select(item: any, index: number) {
    this.selected = item;
    this.chosenCategory.emit(index);
  }

  isActive(item): any {
    return this.selected === item;
  }

}
