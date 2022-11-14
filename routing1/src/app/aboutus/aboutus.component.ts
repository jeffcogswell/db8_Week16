import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  words: string[] = [];

  entry: string = '';

  constructor() {
    console.log('About Us Component - Constructor');
  }

  ngOnInit(): void {
    console.log('About Us Component - onInit');
  }

  addWord() {
    this.words.push(this.entry);
  }

}
