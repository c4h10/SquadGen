import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';


// TODO: tab? clonning copying and creating new store

@Component({
  selector: 'sg-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabContentComponent implements OnInit {

  @Input() id: number;
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

}
