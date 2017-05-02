import { Component, Input } from '@angular/core';

@Component({
  selector: 'enviouTemplate',
  template: `
<ion-card>
<img src="./img/card1.jpg">      
<ion-card-content><p wrap>{{texto}}</p>
<ion-item no-padding><ion-avatar item-left><img src="./img/gus2016.jpg"></ion-avatar><p>{{name}}</p><span class="datatexto">18/04/2017</span>        </ion-item>
<ion-item no-padding>
<button item-left ion-button outline small icon-left color="dark" (click)="isButtonToggle(1)" [color]="!buttonClickedLike ? 'gray' : 'dark'"><ion-icon name="heart-outline"></ion-icon>Curtir</button>
<button item-right ion-button outline [color]="!buttonClickedShare ? 'gray' : 'dark'" (click)="isButtonToggle(2)" small><ion-icon name="share-alt"></ion-icon></button>
</ion-item>
</ion-card-content>
</ion-card>`,
})
export class EnviouComponent {
    
    @Input() cardEnviou;

    buttonClickedLike: boolean = false;
    buttonClickedShare: boolean = false;
    
    texto: string;
    name: string;

  constructor() {
    this.texto="Enviou";
    this.name="Gustavo Andrade";
  }
     
    isButtonToggle(x):void{
    switch(x){
      case 1:
        this.buttonClickedLike = !this.buttonClickedLike;
        break;
      case 2:
        this.buttonClickedShare = !this.buttonClickedShare;
        break;
    }
  }
     
}