import { Component, Input, OnInit } from '@angular/core';
import { Ship } from '../../../global/reducers/types';

@Component({
  selector: 'sg-maneuvers',
  templateUrl: './maneuvers.component.html',
  styleUrls: ['./maneuvers.component.scss']
})
export class ManeuversComponent implements OnInit {

  @Input() ship: Ship;

  dialMap: string[][];
  /**

   [ 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
   [ 3, 1, 2, 1, 3, 0, 0, 0, 0, 0],
   [ 1, 2, 2, 2, 1, 0, 0, 0, 0, 0],
   [ 3, 1, 1, 1, 3, 0, 0, 0, 0, 0],
   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
   */
  constructor() {
  }

  ngOnInit() {
    this.dialMap = this.ship.maneuvers.map((row, rowIndex) => {
      const tabRow = row.map((column, colInd) => {
        return this.getManeuverIcon(colInd, column);
      });
      return tabRow;
    }).reverse();

    console.log(this.dialMap);
  }


  private getManeuverIcon(type: number, color: number): string {
    switch (color) {
      case 0:
        return ``;
      case 1:
        return `${this.getManeuverTypeClass(type)} color-white`;
      case 2:
        return `${this.getManeuverTypeClass(type)} color-blue`;
      case 3:
        return `${this.getManeuverTypeClass(type)} color-red`;
    }
      return ``;
  }

  private getManeuverTypeClass(ind): string {
    switch (ind) {
      case 0:
        return `xwing-miniatures-font xwing-miniatures-font-turnleft`;
      case 1:
        return `xwing-miniatures-font xwing-miniatures-font-bankleft`;
      case 2:
        return `xwing-miniatures-font xwing-miniatures-font-straight`;
      case 3:
        return `xwing-miniatures-font xwing-miniatures-font-bankright`;
      case 4:
        return `xwing-miniatures-font xwing-miniatures-font-turnright`;
      case 5:
        return `xwing-miniatures-font xwing-miniatures-font-kturn`;
      case 6:
        return `xwing-miniatures-font xwing-miniatures-font-sloopleft`;
      case 7:
        return `xwing-miniatures-font xwing-miniatures-font-sloopright`;
      case 8:
        return `xwing-miniatures-font xwing-miniatures-font-trollleft`;
      case 9:
        return `xwing-miniatures-font xwing-miniatures-font-trollright`;
      case 10:
        return `xwing-miniatures-font xwing-miniatures-font-reversebankleft`;
      case 11:
        return `xwing-miniatures-font xwing-miniatures-font-reversestraight`;
      case 12:
        return `xwing-miniatures-font xwing-miniatures-font-reversebankright`;
    }
  }
}
