import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'sg-squad-list-navbar-toggle',
  templateUrl: './squad-list-navbar-toggle.component.html',
  styleUrls: ['./squad-list-navbar-toggle.component.scss']
})
export class SquadListNavbarToggleComponent implements OnInit, OnDestroy {

  mobile_menu_visible: number;
  private toggleButton: Element;
  private sidebarVisible: boolean;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.mobile_menu_visible = 0;
    this.toggleButton = this.element.nativeElement as Element;
  }

  ngOnDestroy(): void {
    this.sidebarClose();
  }

  sidebarToggle() {
    const toggleButton = this.toggleButton;
    let $layer;
    if (!document.getElementsByClassName('close-layer')[0]) {
      this.mobile_menu_visible = 0;
      this.sidebarOpen();
    } else {
      this.mobile_menu_visible = 1;
      this.sidebarClose();
    }
    const body = document.getElementsByTagName('body')[0];

    if (this.mobile_menu_visible === 1) {
      body.classList.remove('nav-open');
      if ($layer) {
        $layer.remove();
      }
      setTimeout(function() {
        toggleButton.classList.remove('toggled');
      }, 400);

      this.mobile_menu_visible = 0;
    } else {
      setTimeout(function() {
        toggleButton.classList.add('toggled');
      }, 430);

      $layer = document.createElement('div');
      $layer.setAttribute('class', 'close-layer');


      if (body.querySelectorAll('.main-panel')) {
        document.getElementsByClassName('main-panel')[0].appendChild($layer);
      } else if (body.classList.contains('off-canvas-sidebar')) {
        document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
      }

      setTimeout(function() {
        $layer.classList.add('visible');
      }, 100);

      $layer.onclick = function() { // asign a function
        body.classList.remove('nav-open');
        this.mobile_menu_visible = 0;
        $layer.classList.remove('visible');
        setTimeout(function() {
          $layer.remove();
          toggleButton.classList.remove('toggled');
        }, 400);
      }.bind(this);

      body.classList.add('nav-open');
      this.mobile_menu_visible = 1;

    }
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);

    body.classList.add('nav-open');

    this.sidebarVisible = true;
  }

  sidebarClose() {
    const body = document.getElementsByTagName('body')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    body.classList.remove('nav-open');
  }
}
