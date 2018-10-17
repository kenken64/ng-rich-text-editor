import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from '../../../shared/model/article';
@Component({
  selector: 'app-addArticle',
  templateUrl: './addArticle.component.html',
  styleUrls: ['./addArticle.component.css']
})
export class AddArticleComponent implements OnInit {
  renderHtml: String;
  // froola editor
  publisherForm = new FormGroup({
    formModel: new FormControl('', Validators.minLength(2)),
    subject: new FormControl('', Validators.minLength(10)),
    category: new FormControl('', Validators.minLength(1)),
    publisherName: new FormControl('', Validators.minLength(4))
  });
  
  get formModel(): any { return this.publisherForm.get('formModel'); }
  setValue() { this.publisherForm.setValue({formModel: 'Default text'}); }
  
  constructor() { }
  
  ngOnInit() {

  }

  publish(){
    let richTextValue = this.publisherForm.get('formModel');
    let articleTopic = this.publisherForm.get('subject');
    let category = this.publisherForm.get('category');
    let publisherName = this.publisherForm.get('publisherName');
    let todaysDate  = new Date();
    
    let articleObj: Article = {
      published_date: todaysDate,
      short_description: "",
      subject: articleTopic.value,
      content: richTextValue.value,
      fromWho: publisherName.value,
      category: category.value
    };

    console.log(richTextValue.value);
    this.renderHtml = richTextValue.value;
  }

}
