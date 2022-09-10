import { Component } from '@angular/core';
import { Article } from './Components/article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public arcticles:Article[]; 

  constructor(){
    this.arcticles=[
      new Article('Angular','http://angular.io',3),
      new Article('Fullstack','http://fullstack.io',2),
      new Article('Angular Homepage','http://angular.io',1),
    ]
  }
  addArticle(newtitle:HTMLInputElement,newlink:HTMLInputElement): boolean{
    console.log(`Adding article title:${newtitle.value} and link:${newlink.value}`);
    return false;
  }

}
