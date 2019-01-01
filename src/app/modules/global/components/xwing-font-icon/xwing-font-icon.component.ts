import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sg-xwing-font-icon',
  templateUrl: './xwing-font-icon.component.html',
  styleUrls: ['./xwing-font-icon.component.scss']
})
export class XwingFontIconComponent implements OnInit {

  @Input() type: string;
  @Input() value: string;

  className: string;

  constructor() {
  }

  ngOnInit() {
    this.className = this.getIconClass(this.type, this.value);
  }

  getIconClass(type: string, value: string) {
    console.log(value);
    switch (type) {
      default:
        return `xwing-miniatures-font xwing-miniatures-font-${value.toLowerCase()}`;
        break;
    }
  }
}
