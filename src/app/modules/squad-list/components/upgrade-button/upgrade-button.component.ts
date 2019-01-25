import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from "@angular/core";


@Component({
  selector: 'sg-upgrade-button',
  templateUrl: './upgrade-button.component.html',
  styleUrls: ['./upgrade-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpgradeButtonComponent implements OnInit {

  @Input() type: string;
  @Output() action: EventEmitter<any> = new EventEmitter<any>();

  cssClass: string;
  constructor() { }

  ngOnInit() {
    this.cssClass = `xwing-miniatures-font xwing-miniatures-font-${this.type.toLowerCase()}`;
  }

  onClick(event) {
    this.action.emit({
      type: this.type
    });
  }
}
