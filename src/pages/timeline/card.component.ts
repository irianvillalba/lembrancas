import { Component, Input } from '@angular/core';

@Component({
  selector: 'cardTemplate',
  template: '<ion-card><img src="./img/card1.jpg">      <ion-card-content><p wrap>{{texto}}</p><ion-item no-padding><ion-avatar item-left><img src="./img/gus2016.jpg"></ion-avatar><p>{{name}}</p><span class="datatexto">18/04/2017</span>        </ion-item><ion-item no-padding><button item-left ion-button outline small icon-left color="dark"><ion-icon name="heart-outline"></ion-icon>Curtir</button><button item-right ion-button outline small color="dark"><ion-icon name="share-alt"></ion-icon></button></ion-item></ion-card-content></ion-card>',
})
export class CardComponent {
    
    @Input() card;
    
    texto: string;
    name: string;

  constructor() {
    this.texto="Teste";
    this.name="Gustavo Andrade";
  }
}