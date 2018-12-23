import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sg-nav-menu-item',
  templateUrl: './nav-menu-item.component.html',
  styleUrls: ['./nav-menu-item.component.scss']
})
export class NavMenuItemComponent implements OnInit {
  @Input() iconClass: string;
  @Input() label: string;
  constructor() { }

  ngOnInit() {
  }

}
