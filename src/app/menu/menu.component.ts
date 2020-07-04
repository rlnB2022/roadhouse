import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  selected: any;
  categories: string[];  

  activeMenuItem: number = 0;

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
  }

  select(item) {
    this.selected = item;
  }

  isActive(item) {
    return this.selected === item;
  }

}
