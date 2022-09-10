import { Component,Input, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass='row';
  @Input() arcticle!: Article;

  constructor() {
    
  }

  ngOnInit(): void {
    
  }
  voteup():boolean{
    this.arcticle.voteup();
    return false;
  }
  votedown():boolean{
    this.arcticle.votedown();
    return false;
  }
  
}
