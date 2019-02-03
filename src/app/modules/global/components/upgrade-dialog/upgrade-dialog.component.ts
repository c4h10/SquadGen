import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {Upgrade} from '../../reducers/types';
import { SquadConfig, SquadPilot, State } from '../../../squad-list/store/squad-list.store';
import { SQUAD_LIST_NAV_ACTION } from '../../../squad-list/types';
import { StoreManagerService } from '../../../squad-list/services/store-manager.service';
import { Store } from '@ngrx/store';
import { withTabId } from '../../../../tab-store/types';
import { SquadListAddUpgradeAction, SquadListRemovePilotAction } from '../../../squad-list/actions';

@Component({
  selector: 'sg-upgrade-dialog',
  templateUrl: './upgrade-dialog.component.html',
  styleUrls: ['./upgrade-dialog.component.scss']
})
export class UpgradeDialogComponent implements OnInit {

  tabId: string | number;
  config: SquadConfig;
  upgrades: Upgrade[];
  squadPilot: SquadPilot;
  upgradeType: string;
  cssClass: string;

  constructor(
    private storeManager: StoreManagerService,
    private store: Store<State>,
    public dialogRef: MatDialogRef<UpgradeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.tabId = data.tabId;
    this.config = data.config;
    this.squadPilot = data.squadPilot;
    this.upgrades = data.upgrades;
    this.upgradeType = data.type;
    this.cssClass = `xwing-miniatures-font xwing-miniatures-font-${this.upgradeType.toLowerCase()}`;
  }

  ngOnInit() {
  }

  selectUpgrade(event, upgrade: Upgrade) {
    if (upgrade.disabled) {
      return;
    }
    this.storeManager.dispatch(withTabId(new SquadListAddUpgradeAction({
      squadPilot: this.squadPilot,
      upgrade: upgrade
    }), this.tabId));

    this.dialogRef.close();
  }

  getCssClass(type): string {
    return `xwing-miniatures-font xwing-miniatures-font-${type.toLowerCase()}`;
  }
}
