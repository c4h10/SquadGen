import { Component, Inject, Input, OnInit } from '@angular/core';
import { Ship } from '../../reducers/types';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'sg-dial-dialog',
  templateUrl: './dial-dialog.component.html',
  styleUrls: ['./dial-dialog.component.scss']
})
export class DialDialogComponent implements OnInit {

  ship: Ship;

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.ship = data.ship;
  }

  ngOnInit() {
  }

}
