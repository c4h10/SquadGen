import { Component, OnInit } from '@angular/core';
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
      if (isMobile) {
        console.log('Mobile device detected');
      } else {
        console.log('Desktop detected');
      }
    });
    this.onResize();
  }

  onResize() {
    this.responsiveService.checkWidth();
  }
}
