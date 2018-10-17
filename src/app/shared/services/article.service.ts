import { Injectable } from '@angular/core';
import  { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Article } from '../model/article';
import  { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articlesCollection: AngularFirestoreCollection<Article>;
  constructor(private db: AngularFirestore) { 
    this.articlesCollection = db
    .collection<Article>('article', ref => ref.orderBy('published_date', 'asc'));
  }

  publishAnArticle(value){
    return of(this.articlesCollection.add(value));
  }

  
}
