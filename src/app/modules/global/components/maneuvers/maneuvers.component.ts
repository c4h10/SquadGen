import { Component, Input, OnInit } from '@angular/core';
import { Ship } from '../../reducers/types';

@Component({
  selector: 'sg-maneuvers',
  templateUrl: './maneuvers.component.html',
  styleUrls: ['./maneuvers.component.scss']
})
export class ManeuversComponent implements OnInit {

  @Input() ship: Ship;

  shift: number;
  dialMap: string[][];

  private shipToDialMap: number[] = [2, 3, 4, 5, 6, 9, 1, 7, 0, 8, 10, 11, 12];

  constructor() {
  }

  ngOnInit() {
    this.shift = 0;

    this.dialMap = this.removeEmptyColumn(
      this.ship.maneuvers.map((row, rowIndex) => {
        const tabRow: string[] = [];
        tabRow.length = 13;
        row.forEach((column, colInd) => {
          tabRow[this.shipToDialMap[colInd]] = this.getManeuverIcon(colInd, rowIndex, column);
        });
        // EXCEPTION FOR 0
        if (rowIndex === 0) {
          this.shift = this.isEmptyRow(tabRow) ? 0 : -1;
        }
        return tabRow;
      }).filter((el) => !this.isEmptyRow(el)).reverse()
    );
  }


  private getManeuverIcon(type: number, rowNo: number, color: number): string {
    switch (color) {
      case 0:
        return ``;
      case 1:
        return `${this.getManeuverTypeClass(type, rowNo)} color-white`;
      case 2:
        return `${this.getManeuverTypeClass(type, rowNo)} color-blue`;
      case 3:
        return `${this.getManeuverTypeClass(type, rowNo)} color-red`;
    }
    return ``;
  }

  private getManeuverTypeClass(ind, rowNo: number): string {
    if (rowNo === 0) {
      return `xwing-miniatures-font xwing-miniatures-font-stop`;
    }
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

  private isEmptyRow(row: string[]): boolean {
    return (row.join('') === '');
  }

  private removeEmptyColumn(array) {
    return this.transposeArray(this.transposeArray(array).filter((el) => !this.isEmptyRow(el)));
  }

  private transposeArray(arr) {
    return arr[0].map(function (col, i) {
      return arr.map(function (row) {
        return row[i];
      });
    });
  }
}
