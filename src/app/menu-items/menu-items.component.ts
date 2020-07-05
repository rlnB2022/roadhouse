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
        price: '$6.99',
        calories: '1970 cal',
        description: 'Texas-sized onion golden-fried with Cajun Horseradish sauce for dipping.',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaCactusBlossom.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Fried Pickles',
        price: '$4.99',
        calories: '550 cal',
        description: 'Shareable basket of golden-fried pickle chips',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaFriedPickles.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Rattlesnake Bites',
        price: '$5.99',
        calories: '560 cal',
        description: 'Diced jalapenos and jack cheese, hand-battered and lightly fried',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaRattlesnakeBites.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Fried Pickles',
        price: '$4.99',
        calories: '550 cal',
        description: 'Shareable basket of golden-fried pickle chips',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaTaterSkins.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Grilled Shrimp Appetizer',
        price: '$6.99',
        calories: '590 cal',
        description: 'Seasoned shrimp drizzled with garlic lemon pepper butter and served on toasted fresh-baked bread',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaGrilledShrimpApp.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Boneless Buffalo Wings',
        price: '$8.99',
        calories: '1000 cal',
        description: 'Hand-breaded all white meat chicken tossed in Mild or Hot sauce and served with celery and Bleu Cheese dressing',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaBonelessBuffaloWings.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Cheese Fries',
        price: '$7.49',
        calories: '1240 cal',
        description: 'A heaping amount of golden steak fries topped with melted cheddar and bacon bits',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaCheeseFries.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Killer Ribs',
        price: '$9.99',
        calories: '720 cal',
        description: 'Basket of our award-wining ribs with steak fries.',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaKillerRibs.png&companyCode=TERO001&designId=2&v=139'
      }
    ]

    this.salads = [
      {
        name: 'Grilled Chicken Salad',
        price: '$10.99',
        calories: '810 cal',
        description: 'Crisp cold greens, strips of marinated chicken, jack cheese, egg, tomato, bacon, red onions and croutons.',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaGrilledChickenSalad.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Grilled Salmon Salad 50Z',
        price: '$12.99',
        calories: '800 cal',
        description: 'Crisp cold greens, grilled salmon, jack cheese, egg, tomato, bacon, red onions and croutons',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaSalmonSalad.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Chicken Caesar Salad',
        price: '$10.99',
        calories: '1050 cal',
        description: 'Tender strips of grilled chicken tossed with crisp hearts of romaine, parmesan cheese, croutons and zesty Caesar dressing.',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaChickenCaesarSalad.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Salmon Caesar Salad 50Z',
        price: '$12.99',
        calories: '1150 cal',
        description: 'Grilled salmon tossed with crisp hearts of romaine, parmesan cheese, croutons and zesty Caesar dressing.',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaSalmonCaesar.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Chicken Critter Salad',
        price: '$10.99',
        calories: '690 cal',
        description: 'Hot crispy strips of hcicken piled high on a bed of cold greens with jack and cheddar cheeses, egg, tomato and bacon.',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaChickenCritterSalad.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Steakhouse Filet Salad',
        price: '$14.49',
        calories: '910 cal',
        description: 'Salad greens drizzled with Italian dressing, topped with tender filet strips, Bleu Cheese crumbles, bacon bits, red onions, tomatoes and croutons, and served with a side of creamy Bleu Cheese.',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaSteakhouseFiletSalad.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'House Salad',
        price: '$3.99',
        calories: '230 cal',
        description: 'Fresh greens, cheddar cheese, tomato, eggs and croutons.',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaHouseSalad.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Caesar Salad',
        price: '$3.99',
        calories: '420 cal',
        description: 'Crisp hearts of romaine, fresh parmesan cheese and made-from-scratch croutons tossed with our zesty Caesar dressing.',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaCaesarSalad.png&companyCode=TERO001&designId=2&v=139'
      }
    ]

    this.handcutsteaks = [
      {
        name: 'USDA Choice Sirloin',
        price: '$11.99/$13.99/$16.99/$19.99',
        calories: '250-670 cal',
        description: 'Lean, juicy steak priced at a great value. Served with choice of two sides.',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaSirloinSteak.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'New York Strip',
        price: '$15.99/$18.99',
        calories: '420 / 640 cal',
        description: 'Similar flavor to the sirloin with extra tenderness. Served with choice of two sides.',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaNewYorkStrip.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Dallas Filet',
        price: '$18.99/$20.99',
        calories: '270 / 360 cal',
        description: 'Our most tender steak that is lean and melts in your mouth. Served with choice of two sides.',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaDallasFilet.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Filet Medallions',
        price: '$18.99',
        calories: '760 cal',
        description: 'Three tender filets (9 oz. total) topped with our signature sauce and served over seasoned rice. Includes choice of two sides.',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaFiletMedallions.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Porterhouse T-Bone',
        price: '$26.99',
        calories: '1040 cal',
        description: 'Two steak cuts - filet and strip - in one Texas-sized 23oz. steak. Served with choice of two sides.',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaPorterhouseTBone.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Ft. Worth Ribeye',
        price: '$16.99/$18.99/$21.99',
        calories: '800-1280 cal',
        description: 'Very juicy and flavorful from the marbling throughout the steak. Served with choice of two sides.',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaFtWorthRibeye.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Bone-In Ribeye',
        price: '$25.99',
        calories: '1480 cal',
        description: '20oz. cut of our juicy, flavorful ribeye served on the bone for extra flavor. Served with choice of two sides.',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaBoneInRibeye.png&companyCode=TERO001&designId=2&v=139'
      },
      {
        name: 'Road Kill',
        price: '$9.99',
        calories: '720 cal',
        description: 'Chop steak smothered with sauteed onions, sauteed mushrooms, and jack cheese. Salad with choice of two sides.',
        imageURL: 'https://nolocdnmsftus.azureedge.net/Content?ContentFile=AlohaRoadKill.png&companyCode=TERO001&designId=2&v=139'
      }
    ]
   }

  ngOnInit(): void {
  }

}
