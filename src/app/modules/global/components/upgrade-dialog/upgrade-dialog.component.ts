import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'sg-upgrade-dialog',
  templateUrl: './upgrade-dialog.component.html',
  styleUrls: ['./upgrade-dialog.component.scss']
})
export class UpgradeDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    console.log(data);
  }

  ngOnInit() {
  }

}
