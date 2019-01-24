import { Component, HostListener, OnInit } from '@angular/core';
import { ResponsiveService } from './services/responsive.service';

@Component({
  selector: 'sg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SquadGen';

  constructor(private responsiveService: ResponsiveService) {
  }

  ngOnInit(): void {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {

    });
    this.responsiveService.checkWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.responsiveService.checkWidth();
  }
}
