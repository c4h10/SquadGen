import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Upgrade} from '../../reducers/types';
import {SquadPilot} from "../../../squad-list/store/squad-list.store";

@Component({
  selector: 'sg-upgrade-dialog',
  templateUrl: './upgrade-dialog.component.html',
  styleUrls: ['./upgrade-dialog.component.scss']
})
export class UpgradeDialogComponent implements OnInit {

  upgrades: Upgrade[];
  squadPilot: SquadPilot;
  upgradeType: string;
  cssClass: string;

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.squadPilot = data.squadPilot;
    this.upgrades = data.upgrades;
    this.upgradeType = data.type;
    this.cssClass = `xwing-miniatures-font xwing-miniatures-font-${this.upgradeType.toLowerCase()}`;
  }

  ngOnInit() {
  }

}
