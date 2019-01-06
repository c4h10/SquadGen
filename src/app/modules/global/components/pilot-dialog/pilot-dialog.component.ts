import { Component, Inject, OnInit } from '@angular/core';
import { Pilot } from '../../reducers/types';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'sg-pilot-dialog',
  templateUrl: './pilot-dialog.component.html',
  styleUrls: ['./pilot-dialog.component.scss']
})
export class PilotDialogComponent implements OnInit {

  pilot: Pilot;
  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.pilot = data.pilot;
  }

  ngOnInit() {
  }

}
