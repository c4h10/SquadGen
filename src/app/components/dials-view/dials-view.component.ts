import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'sg-dials-view',
  templateUrl: './dials-view.component.html',
  styleUrls: ['./dials-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialsViewComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
