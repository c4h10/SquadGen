import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sg-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainViewComponent  {
}
