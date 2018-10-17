import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-editArticle',
  templateUrl: './editArticle.component.html',
  styleUrls: ['./editArticle.component.css']
})
export class EditArticleComponent implements OnInit {

  // froola editor
  publisherForm = new FormGroup({
    formModel: new FormControl('', Validators.minLength(2)),
  });
  
  get formModel(): any { return this.publisherForm.get('formModel'); }
  setValue() { this.publisherForm.setValue({formModel: 'Default text'}); }
  constructor() { }
  
  ngOnInit() {
  }

  updatePublish(){
    let richTextValue = this.publisherForm.get('formModel');
    console.log(richTextValue);
  }

}
