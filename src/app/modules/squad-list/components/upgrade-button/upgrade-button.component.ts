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

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    this.action.emit({
      type: this.type
    });
  }

  getCssClass(type): string {
    if (type.toLowerCase() === 'configuration') {
      return `xwing-miniatures-font xwing-miniatures-font-config`;
    }
    return `xwing-miniatures-font xwing-miniatures-font-${type.toLowerCase()}`;
  }
}
