import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sg-dials-view',
  templateUrl: './dials-view.component.html',
  styleUrls: ['./dials-view.component.scss']
})
export class DialsViewComponent implements OnInit {
  tabConfig: any = {
    types: [
      {
        id: 'squad-list',
        unique: false
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
