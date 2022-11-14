import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inst-list',
  templateUrl: './inst-list.component.html',
  styleUrls: ['./inst-list.component.css']
})
export class InstListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addInstrument() {
    alert('hi');
  }

}
