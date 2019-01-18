import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sg-upgrade-button',
  templateUrl: './upgrade-button.component.html',
  styleUrls: ['./upgrade-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpgradeButtonComponent implements OnInit {

  @Input() type: string;
  cssClass: string;
  constructor() { }

  ngOnInit() {
    this.cssClass = `xwing-miniatures-font xwing-miniatures-font-${this.type.toLowerCase()}`;
  }

  onClick(event) {
    console.log('UPGR BUTTON');
    console.log(this.type);
  }
}
