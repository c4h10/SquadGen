import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sg-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() iconClass: string;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
