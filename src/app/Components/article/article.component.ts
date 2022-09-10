import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass='row';
  public article:Article;
  constructor() {
    this.article=new Article(
    'Angular',
    "http://angular.io",
      10);
  }

  ngOnInit(): void {
    
  }
  voteup():boolean{
    this.article.voteup();
    return false;
  }
  votedown():boolean{
    this.article.votedown();
    return false;
  }
  
}
