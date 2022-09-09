import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  addArticle(newtitle:HTMLInputElement,newlink:HTMLInputElement): boolean{
    console.log(`Adding article title:${newtitle.value} and link:${newlink.value}`);
    return false;
  }

}
