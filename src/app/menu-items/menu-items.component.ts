import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  @Input() cat: number;

  selected: any;
  
  starters: any;
  salads: any;
  handcutsteaks: any;
  fallofftheboneribs: any;
  texassizecombos: any;
  chickenspecialties: any;
  countrydinners: any;
  docksidefavorites: any;
  burgersandsandwiches: any;
  kidsandrangermeals: any;
  extras: any;
  desserts: any;
  beverages: any;

  menuSelected: string = "";

  constructor() {
    this.selected = 0;

    this.starters = [
      {
        name: 'Cactus Blossom',
        price: 6.99,
        calories: 1970,
        description: 'Texas-sized onion golden-fried with Cajun Horseradish sauce for dipping.',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaCactusBlossom.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Fried Pickles',
        price: 4.99,
        calories: 550,
        description: 'Shareable basket of golden-fried pickle chips',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaFriedPickles.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Rattlesnake Bites',
        price: 5.99,
        calories: 560,
        description: 'Diced jalapenos and jack cheese, hand-battered and lightly fried',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaRattlesnakeBites.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Fried Pickles',
        price: 4.99,
        calories: 550,
        description: 'Shareable basket of golden-fried pickle chips',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaTaterSkins.png&companyCode=TERO001&designId=2&v=139'
      }
    ]
   }

  ngOnInit(): void {
  }

}
